const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');


const greenBG = (string) => {
  console.log(chalk.bgGreen.cyan.bold(string));
}

const redBG = (string) => {
  console.log(chalk.bgRed.bold.black(string));
}

const cyanLetters = (string) => {
  console.log(chalk.cyan.bold(string));
}

// Customize yargs version

yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function () {
    greenBG('Adding a new note...')
  }
})


// Create remove command
yargs.command({
  command: 'remove',
  describe: "Remove a note",
  handler: function () {
    redBG('Removing the note...')
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: "Read a note",
  handler: function () {
    cyanLetters('Reading the note...')
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: "List notes...",
  handler: function () {
    cyanLetters('Displaying list...')
  }
})
console.log(yargs.argv);