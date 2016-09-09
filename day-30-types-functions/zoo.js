var Zoo = function (city) {
  this.animals = [];
  this.info = {
    count: 0,
    location: city
  };
};

Zoo.prototype.addAnimals = function (specificAnimal) {
  this.animals.push(specificAnimal);
  this.info.count = this.animals.length;
  return specificAnimal.name + ' has been added!';
};

var Animal = function (options) {
  var opts = options || {};

  this.name = opts.name;
  this.species = opts.species;
  this.age = opts.age;
}

Animal.prototype.speak = function () {
  return this.name + ' says, groooowwwwwllll!!';
}


// ----------------------
// Instances
// ----------------------
var nycZoo = new Zoo('NYC');

var a = new Animal({ name: 'George', species: 'Monkey', age: 5 });
var b = new Animal({ name: 'Madie', species: 'Elephant', age: 12 });
var c = new Animal({ name: 'Bill', species: 'Donkey', age: 2 });

nycZoo.addAnimals(a);
nycZoo.addAnimals(b);
nycZoo.addAnimals(c);

console.dir(nycZoo);

// -------

var atlZoo = new Zoo('ATL');

var d = new Animal({ name: 'Sammy', species: 'Whale', age: 5 });
var e = new Animal({ name: 'Bruce', species: 'Shark', age: 12 });
var f = new Animal({ name: 'Leo', species: 'Lion', age: 2 });
var g = new Animal({ name: 'Geoff', species: 'Jackalope', age: 2 });

atlZoo.addAnimals(d);
atlZoo.addAnimals(e);
atlZoo.addAnimals(f);
atlZoo.addAnimals(g);

console.dir(atlZoo);

console.log(a.speak());
console.log(e.speak());
