const { Schema, model } = require('mongoose');

const groupSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    trim: true,
  },
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Friend'
    }
  ],
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }
  ],
  interests: {
    type: Array
  }
  
});

const Group = model('Group', groupSchema);

module.exports = Group;
