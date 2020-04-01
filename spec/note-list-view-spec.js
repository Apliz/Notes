(function (exports) {

  function testListView() {
    view = new noteListView();
    view.noteList.add("Favourite drink: seltzer");
    if (view.viewNotesAsHTML() == '<ul><li><div>Favourite drink: seltzer</ul></li></div>') {
      console.log('Note is represented in HTML :: Test Pass');
      view.noteList.collection = [];
      return true;
    } else {
      console.log('Note is not represented in HTML :: Test Fail')
      return false;
    };
  };
  exports.testListView = testListView;
})(this);
