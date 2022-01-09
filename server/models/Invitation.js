const { Schema, model } = require('mongoose');

//id, date created, contact name, contact email, status 
const invitationSchema = new Schema({
  date_created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    //use a regex to match below here
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    trim: true,
    required: true
  },
});

const Invitation = model('Invitation', invitationSchema);

module.exports = Invitation;
