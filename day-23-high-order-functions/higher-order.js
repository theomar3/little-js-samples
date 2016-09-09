var someNumbers = [5, 9, 83, 22, 4, 3];


// Adding function with foreach

function addSomeNumbers(array) {
  var sum = 0;
  function added (item) {
    sum = sum + item;
  }
  array.forEach(added);
  return sum;
}

sum = addSomeNumbersAgain(someNumbers);
console.log('sum', sum);

// Odd number function

function oddNumbers(array) {
  var odds = [];
  function theOdds(item) {
    if (item%2 === 1) {
      odds.push(item);
    }
  }
  array.forEach(theOdds);

  return odds;
}

var odds = oddNumbers(someNumbers);
console.log('odds', odds);

// adding all odd numbers

var oddSum = addSomeNumbersAgain(odds)
console.log(oddSum);

// even number function

function evenNumbers(array) {
  var evens = [];

  array.forEach(function(item){

    if (item%2 === 0) {
      evens.push(item);
    }
  });

  return evens;

}

var evens = evenNumbers(someNumbers);
console.log('evens', evens);

// adding even numbers

var evenSum = addSomeNumbersAgain(evens)
console.log(evenSum);
