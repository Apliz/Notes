
(function (exports) {

  function testCreateNote() {
    noteInstance = new note("test");
    if (noteInstance.contents() == 'test') {
      console.log('New note was created :: Test Pass');
      noteInstance.text = null;
      return true;
    } else {
      console.log('New note was not created :: Test Fail');
      return false;
    };
  };

  exports.testCreateNote = testCreateNote;

})(this);
