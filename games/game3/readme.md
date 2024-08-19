### Задание

Игрок играет против компьютера. Компьютер случайным образом выбирает один из трех вариантов: камень, ножницы или бумага.
Игрок вводит свой выбор. После этого выводится результат игры (победа, поражение или ничья).

##### Пояснения (Будет лучше, если будете писать на английском)

Массив choices: Содержит возможные варианты выбора ("камень", "бумага", "ножницы" или "rock", "paper", "scissors").
Функция getComputerChoice: Возвращает случайный выбор компьютера из массива choices.
Функция determineWinner: Определяет победителя на основе выбора игрока и компьютера.
Функция playGame:
Запрашивает выбор игрока с помощью prompt.
Проверяет правильность введенного выбора. Если выбор неправильный, просит ввести значение заново.
Определяет выбор компьютера, вызывает функцию для определения победителя и отображает результат с помощью alert.




html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Камень, Ножницы, Бумага</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
            margin: 0;
        }
        #game-container {
            text-align: center;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            margin: 10px;
            cursor: pointer;
        }
        #result {
            margin-top: 20px;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <div id="game-container">
        <h1>Камень, Ножницы, Бумага</h1>
        <button onclick="playGame('камень')">Камень</button>
        <button onclick="playGame('ножницы')">Ножницы</button>
        <button onclick="playGame('бумага')">Бумага</button>
        <div id="result"></div>
    </div>

    <script>
        function playGame(playerChoice) {
            const choices = ['камень', 'ножницы', 'бумага'];
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            let result = '';

            if (playerChoice === computerChoice) {
                result = 'Ничья! Вы оба выбрали ' + computerChoice + '.';
            } else if (
                (playerChoice === 'камень' && computerChoice === 'ножницы') ||
                (playerChoice === 'ножницы' && computerChoice === 'бумага') ||
                (playerChoice === 'бумага' && computerChoice === 'камень')
            ) {
                result = 'Вы выиграли! ' + playerChoice + ' побеждает ' + computerChoice + '.';
            } else {
                result = 'Вы проиграли! ' + computerChoice + ' побеждает ' + playerChoice + '.';
            }

            document.getElementById('result').textContent = result;
        }
    </script>
    
</body>
</html>

// const choices = ['камень', 'ножницы', 'бумага']

// const getRandomComputerChoices = () => {
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
// }

// const playGame = () => {
//     const playerChoise = prompt('Введите ваш выбор: камень, ножницы, бумага').toLowerCase()
//     if(!choices.includes(playerChoise)) {
//         alert('Введите камень, ножницы, бумага!')
//         return
//     }
//     const computerChoise = getRandomComputerChoices()
//     if(computerChoise === playerChoise) {
//         return alert('Ничья') 
//     }
//     if(
//         (playerChoise === 'камень' && computerChoise === 'ножницы') || 
//         (playerChoise === 'бумага' && computerChoise === 'камень') || 
//         (playerChoise === 'ножницы' && computerChoise === 'бумага') 
//     ){
//         return alert('Вы выиграли!')
//     }
//     return alert('Мы проиграли')
// }

// playGame()