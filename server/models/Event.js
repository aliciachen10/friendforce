const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  date_created: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  date: {
    type: Date,
    required: true,
    get: (timestamp) => dateFormat(timestamp),
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  //groups: [Group], //this could be optional (invite a group rather than invite a friend)
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Friend'
    }
  ]
  , //q: how should i indicate whether someone accepted, declined, etc.
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'Friend'
  }
});

const Event = model('Event', eventSchema);

module.exports = Event;
