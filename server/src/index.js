require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 4000;

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);
    if (extName && mimeType) {
      return cb(null, true);
    } else {
      cb(new Error('Only .jpg, .jpeg, and .png files are allowed!'));
    }
  },
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
app.post('/api/photos', upload.single('imageFile'), async (req, res) => {
  try {
    const { title, note } = req.body;
    const imageURL = `/uploads/${req.file.filename}`;
    const newPhoto = await Photo.create({ imageURL, title, note });
    res.status(201).json(newPhoto);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// health
app.get('/api/health', (req, res) => res.json({ ok: true }));

// Connect DB then start
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/missydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch((err) => console.error(err));
