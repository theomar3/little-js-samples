'use strict';
if (this.api === undefined) this.api= {};

(function(context) {

  function planetApi() {
    var promise = $.ajax ({
      url: 'http://swapi.co/api/planets/1/'
    });
    promise.done(planet)

    function planet() {
      var string = JSON.stringify(data);
      $('#output').html(string);
      console.log(data);
    }

    function listOfPlanetsApi() {
      var promise = $.ajax ({
        url: 'http://swapi.co/api/planets/'
      });
      promise.done(planets)

      function planets() {
        var string = JSON.stringify(data);
        $('#output').html(string);
        console.log(data);
      }
    }

  }

  function start() {

    $('#planet-api').on('click', planetApi);
    $('#list-of-planets-api').on('click', listOfPlanetsApi);

  }

  context.start = start;

})(window.api);
