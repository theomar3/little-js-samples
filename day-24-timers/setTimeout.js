'use strict';
if (this.setTimeout === undefined) this.setTimeout = {};

(function(context) {

  function start() {
    var $h1 = $('h1');

    function header() {
      $h1.html('5 seconds are up!');
    }
    setTimeout(header, 5000);

  }

  context.start = start;

})(window.setTimeout);
