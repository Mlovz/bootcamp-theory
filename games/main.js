const input = document.querySelector('input')
const button = document.querySelector('button')
const randomNumber = Math.floor(Math.random() * 100)
const result = document.querySelector('.result')
let attempts = 0

button.addEventListener('click', () => {
attempts++;
if (input.value == randomNumber) {
  button.setAttribute('disabled', '');
  result.style.color = 'green';
  result.textContent = `Вы выиграли с ${attempts} попытки`; 
  
} else if (input.value < randomNumber) {
  result.style.color = 'red'
  result.textContent = 'Вы ввели слишком маленькое число'
} else {
  result.style.color = 'red'
  result.textContent = 'Вы ввели слишком большое число'
}
input.value = '';
})
console.log(randomNumber);



