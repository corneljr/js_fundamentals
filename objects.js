// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var recipeBook = new Object()

function addRecipe(title,servings,ingredients) {
  recipe = new Object();
  recipe.servings = servings;
  recipe.ingredients = ingredients;
  recipeBook[title] = recipe;
}

function seeRecipe(title) {
  recipe = recipeBook[title];
  console.log(title);
  console.log('Serves: ' + recipe.servings);
  recipe.ingredients.map( function(item){ console.log(item) } );
}

addRecipe('pizza',3,['cheese','pizza sauce','crust']);
seeRecipe('pizza');


// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var arr = []

function addBook(title, author, status){
  var book = {
    title: title,
    author: author,
    status: status
  }
  arr.push(book)
}

function readBook(title){
  arr.filter( function(book) { return book.title == title })[0].status = true;
}

addBook('The Hobbit', 'J.R.R Tolkein', false);
addBook('A Book', 'An author', true);

arr.map( function(book){
  if (book.status){
    console.log('You have read ' + book.title + ' by ' + book.author);
  }
  else {
    console.log('You need to read ' + book.title + ' by ' + book.author);
  }
});


// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var movies = [];

function addMovie(title, duration, stars){
  var movie = {
    title: title,
    duration: duration, 
    stars: stars
  }
  movies.push(movie);
}

function printMovies(element, index, array){
  console.log(element.title + ' lasts for ' + element.duration + ' minutes. Stars: ' + element.stars.join(', ') + '.');
}

movies.forEach(printMovies);
