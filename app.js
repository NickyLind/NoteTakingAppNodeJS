const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');


const greenBG = (string) => console.log(chalk.bgGreen.bold(string));


const redBG = (string) => console.log(chalk.bgRed.bold.black(string));


const cyanLetters = (string) => console.log(chalk.cyan.bold(string));


// Customize yargs version

yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      //? demandOption is an option that will made an argument required (title here)
      type: 'string'
      //? will require the type of the argument to be a string
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    greenBG('Adding a new note...')
    notes.addNote(argv.title, argv.body)
  }
})


// Create remove command
yargs.command({
  command: 'remove',
  describe: "Remove a note",
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    redBG('Removing the note...')
    notes.removeNote(argv.title)
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: "Read a note",
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    cyanLetters('Reading the note...')
    notes.readNote(argv.title);
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: "List notes...",
  handler() {
    cyanLetters('Displaying list...')
    notes.listNotes();
  }
})

yargs.parse();
// console.log(yargs.argv);
//! yargs.parse() needs to run at the end here so that we can parse all of our arguments

