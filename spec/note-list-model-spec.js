
(function (exports) {

  function testListNotes() {
    nListInstance = new listNoteObjects();
    nListInstance.add("Favourite drink: seltzer");
    if (nListInstance.collection.length == 1) {
      console.log('Note object stored in an array:: Test Pass');
      return true
    } else {
      console.log('nothing stored in the array :: Test Fail');
      return false
    };
  };
  exports.testListNotes = testListNotes;
})(this);