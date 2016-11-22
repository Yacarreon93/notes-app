console.log('Starting index.js')

const fs = require('fs')
const _ = require('lodash')
const argv = require('yargs').argv

const notes = require('./notes')

var command = argv._[0]

// Prints command args
// console.log(argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll()
} else if (command === 'read') {
  notes.getNote(argv.title)
} else if (command === 'remove') {
  notes.removeNote(argv.title)
} else {
  console.log('Command not recognized');
}
