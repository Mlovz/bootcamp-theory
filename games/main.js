// Math

const randomNumber = 40

let attempts = 5

function guessNumber(){
    if(attempts === 0   ) return alert('Вы проиграли!')
    const userGuess = Number(prompt('Введите число от 0 до 100?'))

    document.body.innerHTML = `<h1>${attempts}</h1>`
    
    if(userGuess === randomNumber) {
        alert('Вы угадали!')
    }else if (userGuess > randomNumber) {
        alert('Вы ввели слишком большое число')
    attempts--

        guessNumber()
    }else {
        alert('Вы ввели слишком маленькое число')
    attempts--

        guessNumber()
    }
}

guessNumber()