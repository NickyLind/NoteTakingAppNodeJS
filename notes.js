const { default: chalk } = require('chalk');
const fs = require('fs');

const getNotes = () => {
  return 'Your notes...';
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter((note => note.title === title))

  if(duplicateNotes.length === 0) {
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

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
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
  addNote: addNote
};