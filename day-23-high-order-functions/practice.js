var someNumbers = [5, 9, 83, 22, 4, 3];

// adding with foreach

function addSomeNumbers(array) {
  var sum = 0;
  function add(item) {
    sum = sum + item;
  }

  array.forEach(add);
  return sum;
}

var sum = addSomeNumbers(someNumbers);

// odd numbers

function oddNumbers(array) {
  var odds = [];
  function odd(item) {
    if(item%2 === 1) {
      odds.push(item);
    }
  }

  array.forEach(odd);

  return odds;
}

var odds = oddNumbers(someNumbers);

// adding odd numbers

var oddSum = addSomeNumbers(odds);

// even numbers

function evenNumbers(array) {
  var evens = [];

  function even(item) {
    if(item%2 === 0) {
      evens.push(item);
    }
  }

  array.forEach(even);

  return evens;
}

var evens = evenNumbers(someNumbers);

// adding even numbers

var evenSum = addSomeNumbers(evens);
