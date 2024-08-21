let input = document.querySelector(".game__input");
let btn = document.querySelector(".game__btn");
let result = document.querySelector(".game__result");
let score1 = document.querySelector(".game__score");


let arrChoice = ["камень", "ножницы", "бумага"];
let getRandomComputer = () => {
  let randomNumber = Math.floor(Math.random() * arrChoice.length);
  return arrChoice[randomNumber];
}
let score = 0
let getWinner = () => {
  let computerChoice = getRandomComputer();
  let userChoice = (input.value).toLowerCase();
  if(!arrChoice.includes(userChoice)) {
    return result.textContent = "Некорректный ввод";
  } 
  if(userChoice === computerChoice) {
    return result.textContent = "Ничья";
  }
  if((userChoice ===  "камень" && computerChoice === "ножницы") ||
    (userChoice === "бумага" && computerChoice === "камень") ||
    (userChoice === "ножницы" && computerChoice === "бумага")
  ){
    score += 1

    return result.textContent = "Вы выиграли";
  } else {
    return result.textContent = "Вы проиграли"
  }
  
}
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  getWinner();  
  input.value = "";
  // getRandomComputer()
  score1.textContent = `Ваш счет ${score}`
})
document.addEventListener("DOMContentLoaded", () => {
  score1.textContent = `Ваш счет ${score}`
});
