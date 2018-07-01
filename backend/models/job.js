const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  post_date: {
    type: Date,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  company_name: {
    type: String,
    required: true
  },
  applied: {
    type: Boolean,
    default: false
  },
  progress_stage: {
    type: String,
    default: "saved"
  },
  type: {
    type: String,
    default: "unknown"
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  logo_url: {
    type: String,
    required: false
  },
  last_update: {
    type: Date,
    required: true
  },
  hide: {
    type: Boolean,
    default: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
})

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;

