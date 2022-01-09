const { Schema, model } = require('mongoose');
// fields are name, date created, address, phone number, email, and can be connected to the group the contact is in
const friendSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  address: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    //use a regex to match below here
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  phone: {
    type: String,
    unique: true,
    trim: true,
    //use a regex to match below here
    match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, "Please enter a valid phone number"]
  },
});

const Friend = model('Friend', friendSchema);

module.exports = Friend;
