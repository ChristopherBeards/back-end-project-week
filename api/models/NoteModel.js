const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Note', NoteSchema);