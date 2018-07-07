const mongoose = require('mongoose');
// const Note = require('./note')
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  company_name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  applied: {
    type: Boolean,
    default: false
  },
  url: {
    type: String,
    required: true
  },
  post_date: {
    type: Date,
    required: false,
    default: Date.now
  },

  logo_url: {
    type: String,
    required: false,
    default: "./imgs/logo-symbol.svg"
  },
  description: {
    type: String,
    required: false
  },
  type: {
    type: String,
    default: "unknown",
    required: false
  },
  
  progress_stage: {
    type: String,
    required: false,
    default: "saved"
  },
  last_update: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: 'Note',
    required: false
  }
})

// REMOVE DOES NOT TRIGGER MIDDLEWARE. WE WILL HAVE TO DO THIS CONTROLLER SIDE
// jobSchema.post('remove', function (doc) {
//   console.log("Post Remove Hook Hit")
//   Note.remove({user: doc.user, job: doc._id}).exec();
// })
const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
