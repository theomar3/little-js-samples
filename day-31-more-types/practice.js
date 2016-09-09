function Zoo() {
  this.animals = [];
  this.animalsByName = {};
}

Zoo.prototype.addAnimal = function(animal) {
  this.animals.push(animal);
  this.animalsByName[animal.name] = animal;
}

Zoo.prototype.getCarnivores() {
  var carnivores = [];

  this.animals.forEach(carnivoreArray);

  function carnivoreArray(animal) {
    if(animal.foodType === 'carnivore') {
      carnivores.push(animal);
    }
  }

  return carnivores;
}

Zoo.prototype.getByName = function(name) {
  var animal = this.animalsByName[name];

  if(animal) {
    return animal;
  }
  else {
    return null;
  }
}
