// To run on GUI, take out. For production


//Put API Key here if you want GUI. Delete this line with API key before pushing to Github
// Assignment only cares about .js code
const api_key = process.env.SECRET_KEY
let jokes;


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': api_key, // nothing when on dom
		'X-RapidAPI-Host': 'dad-jokes7.p.rapidapi.com'
	}
};


const fetchJokes = () => {
fetch('https://dad-jokes7.p.rapidapi.com/dad-jokes/random', options)
	.then(response => response.json())
	.then(response => console.log(response)) // change this to make it display the jokes
	.then(data => jokes = data) // change this to make it display the jokes
	.catch(err => console.error(err));
}

fetchJokes()

const displayJoke = () => {
	//get element where jokes will appear and assign it to variable
let jokeResults = document.getElementById("joke-text");
	

}

displayJoke()

window.onload = function() {
    fetchJokes()
}
//create button that calls displayJokes() when clicked