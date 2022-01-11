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
  },
  //groups: [Group], //this could be optional (invite a group rather than invite a friend)
  invitees: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Friend'
    }
  ], //q: how should i indicate whether someone accepted, declined, etc.
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'Friend'
  }
});

const Event = model('Event', eventSchema);

module.exports = Event;
