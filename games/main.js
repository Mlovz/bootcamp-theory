const input = document.querySelector('input')
const button = document.querySelector('button')
const randomNumber = Math.floor(Math.random() * 100)
const result = document.querySelector('.result')
let attempts = 3

button.addEventListener('click', () => {
attempts--;
if (Number(input.value) === randomNumber) {
  button.setAttribute('disabled', '');
  result.style.color = 'green';
  result.textContent = `Вы выиграли с ${attempts -1} попытки`; 
  
} else if (input.value < randomNumber) {
  result.style.color = 'red'
  result.textContent = 'Вы ввели слишком маленькое число'
} else {
  result.style.color = 'red'
  result.textContent = 'Вы ввели слишком большое число'
} if (attempts <= 0) {
  result.style.color = 'red'
  result.textContent = 'Попытки закончились'
  button.setAttribute('disabled', '');
} {

}
input.value = ''; 
})
console.log(randomNumber);



