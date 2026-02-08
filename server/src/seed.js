require('dotenv').config();
const mongoose = require('mongoose');
const Photo = require('./models/Photo');
const Letter = require('./models/Letter');
const TimelineEvent = require('./models/TimelineEvent');

const MONGODB = process.env.MONGODB_URI || 'mongodb://localhost:27017/missydb';

async function seed() {
  await mongoose.connect(MONGODB);
  await Photo.deleteMany();
  await Letter.deleteMany();
  await TimelineEvent.deleteMany();

  await Photo.create([
    {
      imageURL: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1200&q=80&auto=format&fit=crop',
      title: 'Sunset walk',
      note: 'The day we walked until the sky turned lavender.'
    },
    {
      imageURL: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
      title: 'Cozy cafe',
      note: 'Hot drinks, warm hands, quiet laughs.'
    }
  ]);

  await Letter.create({
    body:
      "Missy, loving you feels like home. You are my calm and my forever. This letter is small, but my love for you is boundless. — Always"
  });

  await TimelineEvent.create([
    { title: 'First Coffee', description: 'We met over nervous smiles and warm espresso.', date: new Date('2020-06-12') },
    { title: 'First Trip', description: 'A quiet weekend by the sea.', date: new Date('2021-08-22') }
  ]);

  console.log('Seed complete');
  process.exit();
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
