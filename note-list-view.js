var NoteList = require("./note-list-model.js").NoteList;

(function(exports)  {

  var NoteListView = function(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.output = function() {
    string = "<ul>"
    for(i=0; i<this.noteList.list().length; i++){
      string+= "<li><div>"+ this.noteList.list()[i].read() +"</div></li>";
    }
    string+="</ul>"
    return string
  };

  exports.NoteListView = NoteListView;

})(this);
