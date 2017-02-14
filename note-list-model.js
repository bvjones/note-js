(function(exports)  {

  var NoteList = function() {
    this._list = [];
  }

  NoteList.prototype.list = function() {
    return this._list;
  }

  NoteList.prototype.addNote = function(string) {
    this._list.push(new Note(string));
  }

  exports.NoteList = NoteList;

})(this);
