const jokeContainer = document.getElementById('jokeContainer');
const jokeButton = document.getElementById('jokeButton');
const jokeUrl = 'https://api.chucknorris.io/jokes/random';

let getJoke = async () => {
    jokeContainer.classList.remove('fade');
    const response = await fetch(jokeUrl);
    const jokeData = await response.json();
    jokeContainer.innerHTML = jokeData.value;
    jokeContainer.classList.add('fade');
}


jokeButton.addEventListener('click', getJoke);