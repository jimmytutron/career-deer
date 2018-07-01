const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
  body: {
    type: String
  },
  job: {
    type: Schema.Types.ObjectId,
    ref: "Job",
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;

