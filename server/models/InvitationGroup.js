const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

//id, date created, contact name, contact email, status 
const invitationGroupSchema = new Schema({
  date_created: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  // invitee: { //should this entire invitationSchema be identified primarily via email? 
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
  // inviter: { //should inviter be identified by email? 
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
  invitee: {
      type: Schema.Types.ObjectId,
      ref: 'Friend'
  },
  inviter: {
    type: Schema.Types.ObjectId,
    ref: 'Friend'
  },
  email: {
    type: String,
    required: true,
    trim: true,
    //use a regex to match below here
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending',
    trim: true,
    required: true
  },
  group: {
      type: Schema.Types.ObjectId,
      ref: 'Group'
  }
}); 

const InvitationGroup = model('InvitationGroup', invitationGroupSchema);

module.exports = InvitationGroup;
