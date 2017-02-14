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

function returnsHtmlListMultiple() {
  var notelist = new NoteList()
  notelist.addNote("Hi")
  notelist.addNote("Hey")

  var notelistview = new NoteListView(notelist)

  if(notelistview.output() !== "<ul><li><div>Hi</div></li><li><div>Hey</div></li></ul>")
    throw new Error("Output is wrong for multiple notes "+notelistview.output());
}

function returnsHtmlListNoNote() {
  var notelist = new NoteList()
  var notelistview = new NoteListView(notelist)

  if(notelistview.output() !== "<ul></ul>")
    throw new Error("Output is wrong for no note case");
}

instantiatesWithNoteList()
returnsHtmlList()
returnsHtmlListMultiple()
returnsHtmlListNoNote()
