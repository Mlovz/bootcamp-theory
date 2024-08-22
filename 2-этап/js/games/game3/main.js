const choices = ['камень', 'ножницы', 'бумага']

const getRandomComputerChoices = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const playGame = () => {
    const playerChoise = prompt('Введите ваш выбор: камень, ножницы, бумага').toLowerCase()
    if(!choices.includes(playerChoise)) {
        alert('Введите камень, ножницы, бумага!')
        return
    }
    const computerChoise = getRandomComputerChoices()
    if(computerChoise === playerChoise) {
        return alert('Ничья') 
    }
    if(
        (playerChoise === 'камень' && computerChoise === 'ножницы') || 
        (playerChoise === 'бумага' && computerChoise === 'камень') || 
        (playerChoise === 'ножницы' && computerChoise === 'бумага') 
    ){
        return alert('Вы выиграли!')
    }
    return alert('Мы проиграли')
}

playGame()




