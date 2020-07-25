(function (exports) {
  function singleNoteView(string) {
    this.noteInstance = new note(string);
  }

  singleNoteView.prototype.display = function () {
    return "<div>" + this.noteInstance.text + "</div>"
  };
  exports.singleNoteView = singleNoteView;
})(this);
