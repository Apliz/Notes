(function (exports) {

  function listNoteObjects() {
    this.collection = [];
  };

  listNoteObjects.prototype.add = function (string) {
    noteInstance = new note(string);
    this.collection.push(noteInstance);
  };

  exports.listNoteObjects = listNoteObjects;

})(this);