// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(num1,num2){
  if (num1 > num2) {
    console.log('The greater number of ' + num1 + ' and ' + num2 + ' is ' + num1);
  }
  else {
    console.log('The greater number of ' + num1 + ' and ' + num2 + ' is ' + num2);
  }
}

greaterNum(10,6)
greaterNum(56,90)
// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(lang) {
  if (lang == 'en'){
    console.log('Hello, World');
  }
  else if (lang == 'fr'){
    console.log('Bonjour, le monde');
  }
  else {
    console.log('Hola, world');
  }
}
 helloWorld('en');
 helloWorld('fr');
 helloWorld('es');

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(num) {
  if (num >= 80) {
    return 'A';
  }
  else if (num >= 70) {
    return 'B';
  }
  else if (num >= 60) {
    return 'C';
  }
  else if (num >= 50) {
    return 'D';
  }
  else {
    return 'F'
  }
}

assignGrade(80);
assignGrade(62);
assignGrade(43);


// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, number){
  patt = new RegExp('ee');
  if ((number > 1) && !patt.test(noun)){
    return number + ' ' + noun + 's';
  }
  else{
    return number + ' ' + noun;
  }
}
  
pluralize('sheep', 8);
pluralize('dog', 5);
pluralize('cat', 1);
