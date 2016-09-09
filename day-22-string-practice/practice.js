//Implement a function that takes a string and a letter to see if the first string contains the letter.
function letterInString(string, letter) {
  var index = string.indexOf(letter) > -1;
  return index;
}


//Implement a function that takes two strings to see if the first string contains the second.
function twoStrings(string1, string2) {
  var index = string1.indexOf(string2) > -1;
  return index;
}

var result = twoStrings('install', 'all');
console.log(result);

//Implement a function that replaces the commas of a string with pipe characters
function replaceWithPipe(string) {
  var replace = string.replace(/,/g, "|");
  return replace;
}

//Implement a function that changes the delimiter from one character to another
function delimiterReplacement(string, oldDelimiter, newDelimiter) {
  var replace = string.replace(/oldDelimiter/g, newDelimiter);
  return replace;
}

//Implement a function that splits a string by spaces
function splitStringWithSpaces(string) {
  var split = string.split(' ');
  return split;
}

//Implement a function that splits a string by a supplied delimiter
function splitWithDelimiter(string, delimiter) {
  var split = string.split(delimiter);
  return split;
}

function wordCount(string) {
  var words = string.split(' ');
  var count = words.length;

  return count;
}

//Implement a function that gets the first five characters of a string.
function firstFiveCharacters(string) {
  var firstFive = string.slice(0, 5);
  return firstFive;
}

//Implement a function that gets the first N characters of a string.
function firstNCharacters(string, n) {
  var n = string.slice(0, n);
  return n;
}

//Implement a function that will pull the bold text out of the sentence.
function boldText(string) {
  var start = string.indexOf('<b>') + 3;
  var end = string.indexOf('</b>');

  var bold = string.slice(start, end);
  return bold;
}
