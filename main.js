
// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
	});
	/// the function is below
	const  userInput = () => {
	const allowedKeys = 'Enter';
	  input = readline.question('Press Enter for random Dad Joke'), 
	  //What is theMove?
	  theMove => {
		 if (allowedKeys) {
		  console.log(`${newJoke.joke}`);
		  readline.close();
		 }
	};
 }
 userInput();

// To run on GUI, take out. For production
require('dotenv').config()
// const prompt = require('prompt-sync')();

const api_key = process.env.SECRET_KEY

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': api_key, // nothing when on dom
		'X-RapidAPI-Host': 'dad-jokes7.p.rapidapi.com'
	}
};


let jokes;

const fetchJokes = () => {
	fetch('https://dad-jokes7.p.rapidapi.com/dad-jokes/random', options)
		.then(response => response.json())
		.then(response => console.log(response)) // change this to make it display the jokes
		.then(data => jokes = data) // change this to make it display the jokes
		.catch(err => console.error(err));
	}

const newJoke = fetchJokes()

//I want to display a joke when the user presses enter
const dadJoke = () => {
	console.log(newJoke.joke)
	// console.log(e)
	// let key = e.key;
	// if (key === "Enter"){
	// 	fetchJokes()
	// console.log(`${newJoke.joke}`)
		
	// }
	
}

// const getPrompt = () =>  {
// 	rl.question('Press Enter for random Dad joke ', () => {
// 	  dadJoke();
// 	  getPrompt();
// 	});
//   }

// rl.on('line', () => {
// 	console.log("Hello");
//   });



// const setup = prompt('Press Enter for random Dad Joke')
// dadJoke()




//Put API Key here if you want GUI. Delete this line with API key before pushing to Github
// Assignment only cares about .js code








// getPrompt()

