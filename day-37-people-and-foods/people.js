var people = [
  {
    firstName: 'Bob',
    lastName: 'Smith',
    age: 60,
    favoriteFoods: ['peas', 'cauliflower']
  },
  {
    firstName: 'Eric',
    lastName: 'Sowell',
    age: 40,
    favoriteFoods: ['steak', 'shrimp']
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 32,
    favoriteFoods: []
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 78,
    favoriteFoods: ['chicken wings', 'pizza']
  },
  {
    firstName: 'Martha',
    lastName: 'Stewart',
    age: 54,
    favoriteFoods: ['prison stew', 'baked ziti']
  },
  {
    firstName: 'Jillian',
    lastName: 'Smith',
    age: 17,
    favoriteFoods: ['ham sandwich']
  },
  {
    firstName: 'Jeremiah',
    lastName: 'Jones',
    age: 22,
    favoriteFoods: []
  },
  {
    firstName: 'Selena',
    lastName: 'Kyle',
    age: 30,
    favoriteFoods: ['cobb salad', 'grilled trout']
  },
  {
    firstName: 'Jack',
    lastName: 'Livingston',
    age: 12,
    favoriteFoods: ['snickers', 'fried cheese', 'Cheese-Whiz', 'Three Muskateers', 'Rolos', 'pizza', 'ham']
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    age: 58,
    favoriteFoods: ['cheeseburger']
  },
  {
    firstName: 'Sally',
    lastName: 'Ewing',
    age: 29,
    favoriteFoods: ['pickles']
  },
  {
    firstName: 'Chris',
    lastName: 'Cook',
    age: 40,
    favoriteFoods: ['nachos']
  }
];

function allPeopleWithFirstName(array, name) {
  var johns = array.filter(function(person){
    return person.firstName === name;
  });

  return johns;
}

var result = allPeopleWithFirstName(people, 'John');
// console.log('result', result);

function allPeopleWithFirstNameBeginningInLetter(array, letter) {
  var firstLetterNames = array.filter(function(person){
    return person.firstName.indexOf(letter) === 0;
  });

  return firstLetterNames;
}

var sPeople = allPeopleWithFirstNameBeginningInLetter(people, 'S');
// console.log('s people', sPeople);

function allPeopleWhoLikeCertainFood(array, food) {
  var certainFood = array.filter(function(person) {
    return person.favoriteFoods.indexOf(food) > -1;
  });

  return certainFood;
}

var pizzaPeople = allPeopleWhoLikeCertainFood(people, 'pizza');
// console.log('pizza people', pizzaPeople);

function peopleWhoFavoriteMoreThanNFoods(array, n) {
  var nonPicky = array.filter(function(person) {
    return person.favoriteFoods.length > n;
  });
  
  return nonPicky;
}

var nonPickyPeople = peopleWhoFavoriteMoreThanNFoods(people, 1);
// console.log('nonPickyPeople', nonPickyPeople)
