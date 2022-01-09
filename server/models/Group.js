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
  }
});

const Group = model('Group', groupSchema);

module.exports = Group;
