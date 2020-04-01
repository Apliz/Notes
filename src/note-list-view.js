(function (exports) {
  function noteListView() {
    this.noteList = new listNoteObjects();
  }
  noteListView.prototype.viewNotesAsHTML = function () {
    for (let i = 0; i < this.noteList.collection.length; i++) {
      console.log(`<ul><li><div>${this.noteList.collection[i].text}</ul></li></div>`);
    };
    if (this.noteList.collection.length == 0) { return "no notes to transform!" }
  };
  exports.noteListView = noteListView;
})(this);
