const fs = require('fs');

var originalNote = {
  title: 'Dummy title',
  body: 'Dummy body'
}

// Converts json to string
var originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json', originalNoteString)

var noteString = fs.readFileSync('notes.json')
// Converts string to json
var note = JSON.parse(noteString)

console.log(typeof note)
console.log(note.title)
