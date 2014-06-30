// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(children, partner, location, job){
  console.log("You will be a " + job + ' in ' + location + ', and married to ' + partner + ' with ' + children + ' kids');
}

tellFortune(5, "Pamela", "Switzerland", "Chef")
tellFortune(15, "Rachel", "Toronto", "Garbage Man")
tellFortune(0, "Olga", 'Mexico', 'Drug Lord')

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(birth){
  var current = new Date().getFullYear();
  var firstAge = current - birth;
  var secondAge = current - birth - 1;

  console.log('You are either ' + firstAge + ' or ' + secondAge);
}

calculateAge(1955);
calculateAge(1980);
calculateAge(1910);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amount){
  var maxAge = 95;
  var supply = (maxAge - age) * 365 * amount;

  console.log("You will need " + supply + " to last you until the ripe old age of 95");
}

calculateSupply(42, 2);
calculateSupply(23, 8);
calculateSupply(94, 1);


// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:


// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:


// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function circleCalc(radius){
  var circumference = 2 * Math.PI * radius;
  var area = Math.PI * Math.pow(radius, 2);

  console.log("circumference: " + circumference);
  console.log("area: " + area);
}

circleCalc(5);

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."


function toCelsius(fahrenheit){
  var celsius = (fahrenheit - 32) * (5/9);

  console.log(fahrenheit + "F is " + celsius + "C");
}

function toFahrenheit(celsius){
  var fahrenheit = celsius * (9/5) + 32;

  console.log(celsius + "C is " + fahrenheit + 'F')
}

toCelsius(55);
toFahrenheit(25);
