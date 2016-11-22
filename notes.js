console.log('Starting notes.js')

const fs = require('fs');

var addNote = (title, body) => {
  // console.log('Adding new note', title, body);
  var notes = []
  var note = {
    title,
    body
  }

  // Checks if file exists
  try {
    var notesString = fs.readFileSync('data/notes-data.json')
    notes = JSON.parse(notesString)
  } catch (e) {}

  notes.push(note)
  fs.writeFileSync('data/notes-data.json', JSON.stringify(notes))
}

var getAll = () => {
  console.log('Listing all notes');
}

var getNote = (title) => {
  console.log('Reading note', title);
}

var removeNote = (title) => {
  console.log('Removing note', title);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
