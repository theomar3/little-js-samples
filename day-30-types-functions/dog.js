function Dog() {} //Dog is the base type

Dog.prototype.bark = function() {  //prototype lets you add a function to the type.
  console.log('woof');
};

function Labrador() {}
Labrador.prototype = new Dog(); //Labrador is inheritance/subset of Dog.

function Bulldog() {}
Bulldog.prototype = new Dog();
Bulldog.prototype.bark = function() {  //overrides the bark function on Bulldog
  console.log('ruff!');
}

function Terrier() {}
Terrier.prototype = new Dog();

var lassie = new Labrador();
var spot = new Bulldog();
var rover = new Terrier();

spot.bark();
lassie.bark();
rover.bark();
