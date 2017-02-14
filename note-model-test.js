var Note = require("./note-model.js").Note;

function testReturnsInstantiatedString() {
  var note = new Note('Why is Ben always lying?');

  if (note.read() !== 'Why is Ben always lying?') {
    throw new Error("You F*cked up.");
  }
};

testReturnsInstantiatedString();
