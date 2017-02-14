var NoteList = require("./note-list-model.js").NoteList;

(function(exports)  {

  var NoteListView = function(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.output = function() {
    return "<ul><li><div>"+ this.noteList.list()[0].read() +"</div></li></ul>";
  };

  exports.NoteListView = NoteListView;

})(this);
