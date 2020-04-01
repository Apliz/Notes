
(function (exports) {

  function testListNotes() {
    noteList = new listNoteObjects();
    noteList.add("Favourite drink: seltzer");
    if (noteList.collection.length == 1) {
      console.log('Note object stored in an array:: Test Pass');
      return true
    } else {
      console.log('nothing stored in the array :: Test Fail');
      return false
    };
  };
  exports.testListNotes = testListNotes;
})(this);