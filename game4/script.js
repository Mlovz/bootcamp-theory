let input = document.querySelector(".game__input");
let btn = document.querySelector(".game__btn");
let result = document.querySelector(".game__result");
let score1 = document.querySelector(".game__score");
let random__word = document.querySelector(".random__word");


function randomWord() {
  let words = ["яблоко", "банан", "персик", "груша", "апельсин", "мандарин"];
  let randomNumber = Math.floor(Math.random() * words.length);
  return words[randomNumber];
}
let randomWord1 = randomWord()
random__word.textContent = "_".repeat(randomWord().length);

let correctWord = randomWord1;
let correctWordArray = correctWord.split("");
let guessedLetters = [];
let wordToDisplay = "";
let score = 5; 

btn.addEventListener("click", () => {
  if (score > 0) {
    let userWord = input.value.toLowerCase();
    if (guessedLetters.includes(userWord)) {
      result.textContent = "Вы уже угадали эту букву!"
    } else {
      guessedLetters.push(userWord);
      if (correctWordArray.includes(userWord)) {
            result.textContent = "Вы угадали букву!"
        wordToDisplay = correctWordArray.map((item) => {
          if (guessedLetters.includes(item)) {
            return item;
          } else {
            return "_";
          }
        }).join("");
      } else {
            score--
            result.textContent = "Вы не угадали букву!"
        wordToDisplay = correctWordArray.map((item) => {
          if (guessedLetters.includes(item)) {
            return item;
          } else {
            return "_";
          }
        }).join("");
      }
      random__word.textContent = wordToDisplay;
    }
    if (wordToDisplay === correctWord) {
      result.textContent = "Вы выиграли!";
    }
  } else if (score === 0) {
    result.textContent = "Ты проиграл!";
  }
  score1.textContent = `У тебя осталось: ${score} попыток`
});