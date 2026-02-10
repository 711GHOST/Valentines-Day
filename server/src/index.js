require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const { S3Client } = require('@aws-sdk/client-s3');
const { Upload } = require('@aws-sdk/lib-storage');
const multer = require('multer');
const multerS3 = require('multer-s3');

const app = express();
app.use(cors());
app.use(express.json());

// Configure AWS S3 Client
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Configure Multer to use S3
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, `uploads/${Date.now()}-${file.originalname}`);
    },
  }),
});

// Models
const Photo = require('./models/Photo');
const Letter = require('./models/Letter');
const TimelineEvent = require('./models/TimelineEvent');

// Simple MVC-ish routes
app.get('/api/photos', async (req, res) => {
  try {
    const photos = await Photo.find().sort({ date: -1 });
    res.json({ success: true, data: photos });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.get('/api/letter', async (req, res) => {
  try {
    const letter = await Letter.findOne().sort({ createdAt: -1 });
    res.json({ success: true, data: letter });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.get('/api/timeline', async (req, res) => {
  try {
    const events = await TimelineEvent.find().sort({ date: -1 });
    res.json({ success: true, data: events });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST route to upload photos
app.post('/api/photos', upload.single('image'), async (req, res) => {
  try {
    const { title, note } = req.body;
    const imageURL = req.file.location; // S3 URL
    const newPhoto = new Photo({ title, note, imageURL });
    await newPhoto.save();
    res.status(201).json(newPhoto);
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
});

// Route to add a new timeline event
app.post('/api/timeline', async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const newEvent = new TimelineEvent({ title, description, date });
    await newEvent.save();
    res.status(201).json({ success: true, data: newEvent });
  } catch (error) {
    console.error('Error adding timeline event:', error);
    res.status(500).json({ success: false, message: 'Failed to add timeline event' });
  }
});

// Route to fetch all timeline events
app.get('/api/timeline', async (req, res) => {
  try {
    const events = await TimelineEvent.find().sort({ date: 1 }); // Sort by date ascending
    res.json({ success: true, data: events });
  } catch (error) {
    console.error('Error fetching timeline events:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch timeline events' });
  }
});

// health
app.get('/api/health', (req, res) => res.json({ ok: true }));

// Connect DB then start
const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/missydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch((err) => console.error(err));
