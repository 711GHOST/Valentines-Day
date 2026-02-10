const mongoose = require('mongoose');

const timelineEventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model('TimelineEvent', timelineEventSchema);
