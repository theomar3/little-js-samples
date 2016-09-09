function Zoo(city) {
  this.animals = [];
  this.info = {
    count = 0,
    location = city
  };
}

Zoo.prototype.addAnimals = function(animal) {
  this.animals.push(animal);
  this.info.count = this.animals.length;

  return animal.name;
}

function Animal(opts) {
  var options = opts || {};

  this.name = options.name;
  this.species = options.species;
  this.age = options.age;
}

Animal.prototype.speak = function() {
  return this.name " says rawr!";
}

var nycZoo = new Zoo('NYC');

var monkey = new Animal(
  {
    name: 'George',
    species: 'monkey',
    age: 3
  }
);

nycZoo.addAnimal(monkey);

var atlZoo new Zoo('ATL');

var bird = new Animal(
  {
    name: 'Sam',
    species: 'tucan',
    age: 7
  }
);

atlZoo.addAnimal(bird);

console.log(nycZoo);
console.log(atlZoo);

console.log(bird.speak());
