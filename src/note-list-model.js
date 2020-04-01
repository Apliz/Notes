(function (exports) {

  function listNoteObjects() {
    this.collection = []
  };

  listNoteObjects.prototype.add = function (string) {
    this.collection.push(new note(string));
  };

  exports.listNoteObjects = listNoteObjects;

})(this);