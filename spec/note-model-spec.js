
(function (exports) {

  function testCreateNote() {
    note = new note("test");
    if (note.contents() == 'test') {
      console.log('New note was created :: Test Pass');
      note.text = null;
      return true;
    } else {
      console.log('new note was note created :: Test Fail');
      return false;
    };
  };

  exports.testCreateNote = testCreateNote;

})(this);