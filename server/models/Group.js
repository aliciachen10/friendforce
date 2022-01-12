const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const groupSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  date_created: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
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
  interests: {
    type: Array
  }
  
});

const Group = model('Group', groupSchema);

module.exports = Group;
