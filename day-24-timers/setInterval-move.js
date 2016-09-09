'use strict';
if (this.Move === undefined) this.Move = {};

(function(context) {

  function start() {
    var moveLeft = 0;
    var width = document.documentElement.clientWidth;
    var direction = 'right';

    function moveBlock() {
      var $movingBlock = $('.moving-block');

      if (moveLeft >= width-100) {
        direction = 'left';
      }
      else if (moveLeft <= 0) {
        direction = 'right';
      }

      if (direction === 'left') {
        moveLeft -= 4;
      }
      else {
        moveLeft += 4;
      }
      $movingBlock.css('left', moveLeft + 'px');
    }

    setInterval(moveBlock, 1000/60);
  }

  context.start = start;

})(window.Move);
