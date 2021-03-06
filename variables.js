// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

(function(){
		var children = prompt("How many children?");
		var partnerName = prompt("What would you like your partner's name to be?");
		var geographicLocation = prompt("Where do you want to live?");
		var jobTitle = prompt("What do you want to do?");

		alert("You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnerName + " with " + children + " kids");
})();

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

function age(birthyear){
	var currentYear = 2014;
	var firstAge = 2014 - birthyear;
	var secondAge = firstAge - 1;

	console.log('They are either ' + firstAge + " or " + secondAge );
}

age(1956);


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

function lifetimeSupply(){
	var currentAge = prompt("What is your current age");
	var maxAge = prompt("How old are you going to live to?");
	var dailyConsumption = prompt("How much do you consume per day?");
	var supply = (maxAge - currentAge) * 365 * dailyConsumption;

	console.log(supply);
}

lifetimeSupply();

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
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

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
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




