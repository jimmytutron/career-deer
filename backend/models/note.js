const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
  body: {
    type: String,
    require: false,
    default: ""
  }
})

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;

