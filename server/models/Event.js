const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  }
});

const Event = model('Event', eventSchema);

module.exports = Event;
