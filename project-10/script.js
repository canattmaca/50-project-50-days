const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('btnJoke')

jokeBtn.addEventListener('click', nextJoke)

nextJoke()

function nextJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke
    })
}
