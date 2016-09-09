'use strict';
if (this.newDate === undefined) this.newDate = {};

(function(context) {

  function start() {
    var $h1 = $('h1');

    function clock() {
      var d = new Date();
      var clockText = [d.getHours(), d.getMinutes(), d.getSeconds()];

      $h1.html(clockText.join(":"));
    }



    setInterval(clock, 1000);

  }

  context.start = start;

})(window.newDate);
