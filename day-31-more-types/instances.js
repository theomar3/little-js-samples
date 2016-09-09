function Zoo() {
  this.animals = []; //store the animals as a list
  this.animalsByName = {}; //store the animals by name for quick lookup, like a dictionary
}

Zoo.prototype.addAnimal = function(animal) {
  this.animals.push(animal); //adds animals to the list for general processing
  this.animalsByName[animal.name] = animal; //on an object, square brackets = dot notation. Allows us to use any animal's name.
}

Zoo.prototype.getCarnivores = function() {
  var carnivores = []; //This will only have carnivores in it.

  //check each animal to see if it is a carnivore. If it is, add it to the carnivore list.
  this.animals.forEach(carnivoreArray);

  function carnivoreArray(animal) {
    if (animal.foodType === 'carnivore') { //carnivore? add to output
      carnivores.push(animal);
    }
  }

  return carnivores; //So many carnivores
 }



//Gets animal using the lookup object we created. Way faster because objects are GREAT at finding things by name.

Zoo.prototype.getByName = function(name) {
  var animal = this.animalsByName[name]; //stores the whole object into the variable 'animal'
  console.log(name, animal);
  if (animal) { //if the object is there, return it.
    return animal;
  }
  else { //if not, then return null
    return null;
  }
}




var zoo = new Zoo(); //creating an instance of Zoo

zoo.addAnimal({ type: 'Lion', name: 'Simba', foodType: 'carnivore' });
zoo.addAnimal({ type: 'Lion', name: 'Mufasa', foodType: 'carnivore' });
zoo.addAnimal({ type: 'Baboon', name: 'Rafiki', foodType: 'omnivore' });
zoo.addAnimal({ type: 'Tiger', name: 'Sher khan', foodType: 'carnivore' });


console.log('only the carnivores', zoo.getCarnivores());

zoo.getByName('Mufasa');
zoo.getByName('Optimus Prime');
