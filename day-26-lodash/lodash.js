'use strict';
if (this.Lodash === undefined) this.Lodash = {};

(function(context) {

  function templateObject() {
    var obj = {
      name: 'Princess',
      color: 'black'
    };

    var templateHtml = $('#object-template').html(); //extracts the HTML from the object-template

    var htmlFactory = _.template($templateHtml); //template function
    var html = htmlFactory(obj); //output html

    var $objectPlace = $('#object-place');
    $objectPlace.html(html);
  }

  function templateListOfNumbers() {
    var numbers = [1, 6, 9, 42];

    var $templateHtml = $('#number-list-template').html();
    var htmlFactory = _.template($templateHtml);
    var $listOfNumbers = $('#list-of-numbers');

    for (var i = 0; i < numbers.length; i++) {
      var html = htmlFactory({ num: numbers[i] });
      $listOfNumbers.append(html);
    }
  }

  function templateListOfString() {
    var names = [
      'Captain', "Hulk", "Spidey", "Iron Man"
    ];

    var $templateHtml = $('#hero-template').html();
    var htmlFactory = _.template($templateHtml);
    var $listOfHeroes = $('#list-of-heroes');

    for (var i = 0; i < names.length; i++) {
      var html = htmlFactory({ hero: names[i] });
      $listOfHeroes.append(html);
    }

  }

  function templateListofObjects() {
    var food = [
      {
        name: 'steak',
        deliciousLevel: 4
      },
      {
        name: 'shrimp',
        deliciousLevel: 10
      },
      {
        name: 'spinach',
        deliciousLevel: 8
      },
      {
        name: 'nachos',
        deliciousLevel: 1
      },
    ];

      var $templateHtml = $('#food-template').html();
      var htmlFactory = _.template($templateHtml);
      var $theFood = $('#the-food');

      for(var i = 0; i < food.length; i++) {

        var html = htmlFactory(
          {
            name: food[i].name,
            deliciousLevel: food[i].deliciousLevel
          });
          $theFood.append(html);



      }



  }








  function start() {

    templateObject();
    templateListOfNumbers();
    templateListOfString();
    templateListofObjects();


  }

  context.start = start;

})(window.Lodash);






// function(context)
//
// var $listOfStuff;
//
//
// function omarsFunction(obj) {
//   var templateText = $('#the-template').html();
//   _.template(templateText);
//
//   templateFunc();
//
//   console.log(obj);
//   // var li =
//   // '<li class ="' + obj.className + '">' +
//   // '<div class ="name">' + obj.name + '</div>' +
//   // '<div class="age">' + obj.age + '</div>' +
//   // '<div class ="occupation">' + obj.occupation '</div>' +
//   // + obj +
//   // '</li>';
//   $listOfStuff.append(li);
// }
//
// function start() {
//
//   var starter = [{
//     name: 'Tim',
//     age: 32,
//     occupation: 'IT',
//     className: 'timmy'
//   },
//     name: 'Omar',
//     age: 89,
//     occupation: 'teacher',
//     className: 'omario',
//   },
//     name: "Mark",
//     age: 31,
//     occupation: 'writer',
//     className: 'markymark'
//   }
// ];
//    $listOfStuff = $('#list-of-stuff');
//
//   starter.forEach(omarsFunction)
//
// }
