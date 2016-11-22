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

  // Checks if duplicated title exists
  var duplicateNotes = notes.filter(note => note.title === title)

  // Avoids duplicated note titles
  if(duplicateNotes.length === 0) {
    notes.push(note)
    fs.writeFileSync('data/notes-data.json', JSON.stringify(notes))
  } else {
    console.log('The note already exists');
  }

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
