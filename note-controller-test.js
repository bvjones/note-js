var NoteController = require("./note-controller.js").NoteController;

function testNoteController() {

  function NoteListDouble() {
    this.callCount = 0;
  };

   NoteListView = function(notelist) {

  }

  document = "<html></html>"
  
  document.getElementById = function(id) {

  }

  NoteListDouble.prototype = {
    innerHTML: function() {
    this.callCount++;
    },
    addNote: function(string) {
      this.notetext = string
    },
  }
  var noteListDouble = new NoteListDouble("banana");
  var notecontroller = new NoteController(noteListDouble)
  notecontroller.getHTML();

  if (noteListDouble.callCount !== 0) {
   throw new Error("notecontroller.getHTML() should have been called once");
  }

  // if(notecontroller.getHTML() !== "<ul><li><div>banana</div></li></ul>") {
  //   throw new Error("No BANANA")
  // }
}

testNoteController()
