(function (exports) {

  // FUNCTION 1
  function note(string) {
    this.text = string;
  };

  note.prototype.contents = function () {
    return this.text;
  };

  exports.note = note;

})(this);