// const num1 = Math.floor(Math.random() * 10)

    // switch(operator){
    //     case '+':
    //         correctAnswer = num1 + num2
    //         break;
    //     case '-':
    //         correctAnswer = num1 - num2
    //         break;
    //     case '*':
    //         correctAnswer = num1 * num2
    //         break;
    // }
    



const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const generateQuestion = () => {
    const num1 = getRandomInt(1, 10)
    const num2 = getRandomInt(1, 10)

    const operators = ['+', '-', '*']
    const operator = operators[getRandomInt(1, operators.length - 1)]

    let correctAnswer;

    if(operator === '+') {
        correctAnswer = num1 + num2
    }else if(operator === '-'){
        correctAnswer = num1 - num2
    }else if (operator === '*'){
        correctAnswer = num1 * num2
    }


    return {
        question: `${num1} ${operator} ${num2}`,
        correctAnswer: correctAnswer,
    }
}


const playQuiz = () => {
    const TOTAL_QUESTIONS = 5
    let score = 0
    for(let i = 0; i < TOTAL_QUESTIONS; i++) {
        const {question, correctAnswer} = generateQuestion()
        const userAnswer = Number(prompt(`Вопрос ${i + 1}: ${question} = ?`))

        if (userAnswer === correctAnswer){
            score++
            alert('Правильно!')
        }else{
            alert(`Неправильно. Правильный ответ ${correctAnswer}`)
        }
    }
    alert(`Вы набрали ${score} из ${TOTAL_QUESTIONS}`)
}


playQuiz()

