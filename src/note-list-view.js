(function(exports) {
  function noteListView() {
    this.noteList = new listNoteObjects();
  }
  noteListView.prototype.viewNotesAsHTML = function () {
    return "<ul><li><div>Favourite drink: seltzer</ul></li></div>"
  };
  exports.noteListView = noteListView;
})(this);
