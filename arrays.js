// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var colors = ['blue', 'green','red','yellow']

function suffixed(num){
	if (num == 1){
		return '1st';
	}
	else if (num == 2){
		return '2nd';
	}
	else if (num == 3){
		return '3rd';
	}
	else {
		suffix = num + 'th';
		return suffix;
	}
}

for (var i = 0; i < colors.length; i++ ){
	console.log("My " + suffixed(i + 1) + ' choice is ' + colors[i]);
}

