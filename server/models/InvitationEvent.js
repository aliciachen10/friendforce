const { Schema, model } = require('mongoose');

//id, date created, contact name, contact email, status 
const invitationEventSchema = new Schema({
  date_created: {
    type: Date,
    default: Date.now
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
    unique: true,
    required: true,
    trim: true,
    //use a regex to match below here
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected', 'tentative'],
    trim: true,
    required: true
  },
  event: {
      type: Schema.Types.ObjectId,
      ref: 'Event'
  }
}); 

const InvitationEvent = model('InvitationEvent', invitationEventSchema);

module.exports = InvitationEvent;
