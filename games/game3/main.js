const choices = ['камень', 'ножницы', 'бумага'];
let playerChoice;
let computerChoice;

function playGame() {
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  playerChoice = document.getElementById('playerChoice');
  document.getElementById('result').innerHTML = '';

  let inputValue = playerChoice.value 

  if (inputValue === computerChoice) {
    document.getElementById('result').innerHTML = 'Ничья';
  } else if (
    (inputValue === 'камень' && computerChoice === 'ножницы') ||
    (inputValue === 'бумага' && computerChoice === 'камень') ||
    (inputValue === 'ножницы' && computerChoice === 'бумага')
  ) {
    document.getElementById('result').innerHTML = `Победа`;
  } else {
    document.getElementById('result').innerHTML = `Поражение`;
  }
  playerChoice.value = ""
}