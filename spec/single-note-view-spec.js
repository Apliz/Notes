
(function (exports) {

  function testSingleNoteView() {
    singleNoteViewInstance = new singleNoteView("seltzer");
    if (singleNoteViewInstance.display() == "<div>seltzer</div>") {
      console.log('Can view single note :: Test Pass');
      return true;
    } else {
      console.log('cannot view single note :: Test Fail');
      return false;
    };
  };

  exports.testSingleNoteView = testSingleNoteView;

})(this);