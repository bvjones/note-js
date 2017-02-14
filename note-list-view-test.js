var NoteList = require("./note-list-model.js").NoteList
var NoteListView = require("./note-list-view.js").NoteListView

function instantiatesWithNoteList() {
  var notelistview = new NoteListView(new NoteList())
}

function returnsHtmlList() {
  var notelist = new NoteList()
  notelist.addNote("Hi")
  var notelistview = new NoteListView(notelist)

  if(notelistview.output() !== "<ul><li><div>Hi</div></li></ul>")
    throw new Error("Output is wrong");
}

instantiatesWithNoteList()
returnsHtmlList()
