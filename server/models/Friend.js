const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const bcrypt = require('bcrypt');
// fields are name, date created, address, phone number, email, and can be connected to the group the contact is in
//q: are friends going to be able to friend each other, or is their only linkage through the groups they are in? 
const friendSchema = new Schema({
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
  about_me: {
    type: String,
    trim: true,
  },
  interests: {
    type: Array
  },
  //to do: add about me section, "interest" field - so people can list their interests (such as an array w/ verbs/nouns)
  groups: [
    {
    type: Schema.Types.ObjectId,
    ref: 'Group'
    }
  ],
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }
  ],
  // invitations_received: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Invitation'
  //   }
  // ],
  // invitations_sent: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Invitation'
  //   }
  // ],
  password: {
    type: String,
    trim: true
  }
});

friendSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
friendSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

const Friend = model('Friend', friendSchema);

module.exports = Friend;
