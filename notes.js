const { default: chalk } = require('chalk');
const fs = require('fs');

const addNote = (title, body) => {
  const notes = loadNotes()
  // const duplicateNotes = notes.filter((note => note.title === title))
  const duplicateNote = notes.find(note => note.title === title)
  // find searches the array until it finds one piece of data that fits, fiter will keep searching the entire array after it is found

  if(!duplicateNote) {
    notes.push({
      title,
      body
    })

    saveNotes(notes);
    console.log(chalk.green.bold('Note added Successfully!'));
  } else {
    console.log(chalk.red.bold('Note title is taken!'));
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note => note.title !== title))

  if (notes.length !== notesToKeep.length) {
    console.log(chalk.yellow.bold(`Found note: '${chalk.bold.cyan(title)}'`));
    saveNotes(notesToKeep);
    console.log(chalk.green.bold('note removed!'));
  } else {
    console.log(chalk.red.bold('There is no note with that title'));
  }
}

const listNotes = () => {
  const notes = loadNotes()
  notes.forEach(note => console.log(`Title: ${note.title}, body: ${note.body}`))
}

const readNote = (title) => {
  const notes = loadNotes()
  const foundNote = notes.find(note => note.title === title)

  if(foundNote) {
    console.log(chalk.magenta.bold('Note found!'));
    console.log(`Title: ${chalk.magenta.bold(foundNote.title)} Body: ${foundNote.body}`);
  } else {
    console.log(chalk.red.bold('No note found with that title, please try again'));
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    //? returns bits/bytes data from notes.json file
    const dataJSON = dataBuffer.toString();
    //? turns that data into a string
    return JSON.parse(dataJSON);
    //? parses the string into an object
  } catch (error) {
    return [];
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};