const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}
const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
}
const argv = yargs
              .command('add', 'Add a new note', {
                title: titleOptions,
                body: bodyOptions
              })
              .command('list', 'List all notes')
              .command('read', 'Read a note', {
                title: titleOptions
              })
              .command('remove', 'Remove a note', {
                title: titleOptions
              })
              .help()
              .argv

const notes = require('./notes')

var command = argv._[0]

// Prints command args
// console.log(argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note)
  } else {
    console.log('The note title already exists');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll()
  if (allNotes) {
    console.log('Number of notes:', allNotes.length);
    allNotes.forEach(note => notes.logNote(note))
  } else {
    console.log('There are no notes');
  }
} else if (command === 'read') {
  var note = notes.getNote(argv.title)
  if (note) {
    console.log('Note found');
    notes.logNote(note)
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title)
  var message = noteRemoved ? 'Note was removed' : 'Note not found'
  console.log(message);
} else {
  console.log('Command not recognized');
}
