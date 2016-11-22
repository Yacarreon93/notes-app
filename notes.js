console.log('Starting notes.js')

const fs = require('fs')

var fetchNotes = () => {
  // Checks if file exists
  try {
    var notesString = fs.readFileSync('data/notes-data.json')
    return notes = JSON.parse(notesString)
  } catch (e) {
    return []
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('data/notes-data.json', JSON.stringify(notes))
}

var addNote = (title, body) => {

  // console.log('Adding new note', title, body);
  var notes = fetchNotes()
  var note = {
    title,
    body
  }

  // Checks if duplicated title exists
  var duplicateNotes = notes.filter(note => note.title === title)

  // Avoids duplicated note titles
  if(duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
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
