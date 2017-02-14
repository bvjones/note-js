(function(exports) {

  var NoteController = function(notelistmodel){
    notelistmodel.addNote("Bananas");
    notelistmodel.addNote("Apples");
    this.notelistview = new NoteListView(notelistmodel);
  }

  NoteController.prototype.getHTML = function () {
    var divElement = document.getElementById('app');
    divElement.innerHTML = this.notelistview.output();
  };
  exports.NoteController = NoteController
})(this);

// notelist = new NoteList()
// notecontroller = new NoteController(notelist)
// notecontroller.getHTML()
