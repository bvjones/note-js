var NoteList = require("./note-list-model.js").NoteList;


function testReturnsArray() {
  var notelist = new NoteList();

  if(notelist.list().length !== 0) {
    throw new Error("Wrong array length");
  }
}

function testAddNote() {
  var notelist = new NoteList();
  notelist.addNote("Hi")

  if(notelist.list()[0].read() !== "Hi") {
    throw new Error("Wrong message");
  }
}

testReturnsArray();
testAddNote()
