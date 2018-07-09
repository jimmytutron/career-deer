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
    required: false,
    default: ""
  },
  url: {
    type: String,
    required: false,
    default: ""
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
    required: false,
    default: ""
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
  note: {
    type: [String],
    require: false,
    default: [""]
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
