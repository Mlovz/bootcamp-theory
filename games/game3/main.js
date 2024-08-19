const choices = ['камень', 'ножницы', 'бумага'];
let playerChoice;
let computerChoice;

function playGame() {
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  playerChoice = document.getElementById('playerChoice').value;
  document.getElementById('result').innerHTML = '';

  if (playerChoice === computerChoice) {
    document.getElementById('result').innerHTML = 'Ничья';
  } else if (
    (playerChoice === 'камень' && computerChoice === 'ножницы') ||
    (playerChoice === 'бумага' && computerChoice === 'камень') ||
    (playerChoice === 'ножницы' && computerChoice === 'бумага')
  ) {
    document.getElementById('result').innerHTML = `Победа`;
  } else {
    document.getElementById('result').innerHTML = `Поражение`;
  }
}