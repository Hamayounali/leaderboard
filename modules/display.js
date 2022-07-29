const scoresTable = document.querySelector('.scores-table');
const refreshBtn = document.querySelector('#refresh');

const loadScores = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/3sdi6s7df4Bfhuu1xBXv/scores',
  );
  const results = await response.json();
  const resultsArray = results.result;
  return resultsArray;
};

document.addEventListener('DOMContentLoaded', async () => {
  let results = [];
  results = await loadScores();

  results.forEach((result) => {
    scoresTable.innerHTML += `
              <tr>
                <td class="student-score"> ${result.user}</td>
                <td class="student-score"> ${result.score}</td>
              </tr>
            `;
  });
});

refreshBtn.addEventListener('click', async () => {
  let results = [];
  results = await loadScores();
  const scoreElements = document.querySelectorAll('.student-score');
  scoreElements.forEach((scoreElement) => scoreElement.remove());

  results.forEach((result) => {
    scoresTable.innerHTML += `    
            <tr>
              <td class="student-score"> ${result.user}</td>
              <td class="student-score"> ${result.score}</td>
            </tr>
            `;
  });
});