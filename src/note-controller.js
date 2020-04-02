(function (exports) {

  function controller() {
    this.view = new noteListView();
    // this.view.noteList.add("Favourite drink: seltzer");
  };

  controller.prototype.insertHTML = function () {

    function eachFunction(item) {
      document.getElementById('app').append(item);
    }
    this.view.viewNotesAsHTML().forEach(eachFunction);

    console.log(`${this.view.viewNotesAsHTML().length} note conversion(s) were completed.`);

  };
  exports.controller = controller;
})(this);