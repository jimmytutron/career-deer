const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    body: String
})

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;