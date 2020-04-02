(function (exports) {

  function noteListView() {
    this.noteList = new listNoteObjects();
  }

  noteListView.prototype.viewNotesAsHTML = function () {
    let html = [];

    if (this.noteList.collection.length == 0) { return "no notes to transform!" };
    for (element of this.noteList.collection) {
      html.push(`<div><li><ul>${element.text}</ul></li></div>`);
    };
    return html
  };

  exports.noteListView = noteListView;

})(this);
