const createScore = document.querySelector('#create-score');
const playerName = document.querySelector('#name');
const score = document.querySelector('#score');

createScore.addEventListener('submit', (e) => {
  e.preventDefault();

  if (playerName.value === '' || score.value === '') return;

  fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/3sdi6s7df4Bfhuu1xBXv/scores',
    {
      method: 'POST',
      body: JSON.stringify({
        user: playerName.value,
        score: score.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  playerName.value = '';
  score.value = '';
});
