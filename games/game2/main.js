// // // const num1 = Math.floor(Math.random() * 10)

// //     // switch(operator){
// //     //     case '+':
// //     //         correctAnswer = num1 + num2
// //     //         break;
// //     //     case '-':
// //     //         correctAnswer = num1 - num2
// //     //         break;
// //     //     case '*':
// //     //         correctAnswer = num1 * num2
// //     //         break;
// //     // }
    



// // const getRandomInt = (min, max) => {
// //     return Math.floor(Math.random() * (max - min + 1)) + min
// // }

// // const generateQuestion = () => {
// //     const num1 = getRandomInt(1, 10)
// //     const num2 = getRandomInt(1, 10)

// //     const operators = ['+', '-', '*']
// //     const operator = operators[getRandomInt(1, operators.length - 1)]

// //     let correctAnswer;

// //     if(operator === '+') {
// //         correctAnswer = num1 + num2
// //     }else if(operator === '-'){
// //         correctAnswer = num1 - num2
// //     }else if (operator === '*'){
// //         correctAnswer = num1 * num2
// //     }


// //     return {
// //         question: `${num1} ${operator} ${num2}`,
// //         correctAnswer: correctAnswer,
// //     }
// // }


// // const playQuiz = () => {
// //     const TOTAL_QUESTIONS = 5
// //     let score = 0
// //     for(let i = 0; i < TOTAL_QUESTIONS; i++) {
// //         const {question, correctAnswer} = generateQuestion()
// //         const userAnswer = Number(prompt(`Вопрос ${i + 1}: ${question} = ?`))

// //         if (userAnswer === correctAnswer){
// //             score++
// //             alert('Правильно!')
// //         }else{
// //             alert(`Неправильно. Правильный ответ ${correctAnswer}`)
// //         }
// //     }
// //     alert(`Вы набрали ${score} из ${TOTAL_QUESTIONS}`)
// // }


// // playQuiz()


// const getRandomInt = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// const generateQuestion = () => {
//     const num1 = getRandomInt(1, 10);
//     const num2 = getRandomInt(1, 10);

//     const operators = ['+', '-', '*'];
//     const operator = operators[getRandomInt(0, operators.length - 1)];

//     let correctAnswer;

//     if (operator === '+') {
//         correctAnswer = num1 + num2;
//     } else if (operator === '-') {
//         correctAnswer = num1 - num2;
//     } else if (operator === '*') {
//         correctAnswer = num1 * num2;
//     }

//     return {
//         question: `${num1} ${operator} ${num2}`,
//         correctAnswer: correctAnswer,
//     };
// };

// const playQuiz = () => {
//     const TOTAL_QUESTIONS = 5;
//     let score = 0;
//     let currentQuestionIndex = 0;

//     const questionElement = document.getElementById('question');
//     const answerInput = document.getElementById('answer');
//     const feedbackElement = document.getElementById('feedback');
//     const scoreElement = document.getElementById('score');
//     const nextQuestionButton = document.getElementById('next-question');
//     const submitAnswerButton = document.getElementById('submit-answer');

//     const loadNextQuestion = () => {
//         if (currentQuestionIndex < TOTAL_QUESTIONS) {
//             const { question, correctAnswer } = generateQuestion();
//             questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${question} = ?`;
//             feedbackElement.textContent = '';
//             answerInput.value = '';
//             nextQuestionButton.style.display = 'none';
//             submitAnswerButton.style.display = 'inline';

//             submitAnswerButton.addEventListener('click', () => {
//                 const userAnswer = Number(answerInput.value);
//                 if (userAnswer === correctAnswer) {
//                     score++;
//                     feedbackElement.textContent = 'Correct!';
//                 } else {
//                     feedbackElement.textContent = `Incorrect. The correct answer was ${correctAnswer}.`;
//                 }
//                 currentQuestionIndex++;
//                 nextQuestionButton.style.display = 'inline';
//                 submitAnswerButton.style.display = 'none';
//                 scoreElement.textContent = `Score: ${score} out of ${TOTAL_QUESTIONS}`;
//             })
//         } else {
//             questionElement.textContent = 'Quiz Completed!';
//             feedbackElement.textContent = `You scored ${score} out of ${TOTAL_QUESTIONS}`;
//             nextQuestionButton.style.display = 'none';
//             submitAnswerButton.style.display = 'none';
//         }
//     };

//     nextQuestionButton.addEventListener('click', loadNextQuestion);

//     // Start the quiz with the first question
//     loadNextQuestion();
// };

// playQuiz();


const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateQuestion = () => {
    const num1 = getRandomInt(1, 10);
    const num2 = getRandomInt(1, 10);

    const operators = ['+', '-', '*'];
    const operator = operators[getRandomInt(0, operators.length - 1)];

    let correctAnswer;

    if (operator === '+') {
        correctAnswer = num1 + num2;
    } else if (operator === '-') {
        correctAnswer = num1 - num2;
    } else if (operator === '*') {
        correctAnswer = num1 * num2;
    }

    return {
        question: `${num1} ${operator} ${num2}`,
        correctAnswer: correctAnswer,
    };
};

const playQuiz = () => {
    const TOTAL_QUESTIONS = 5;
    let score = 0;
    let currentQuestionIndex = 0;

    const questionElement = document.getElementById('question');
    const answerInput = document.getElementById('answer');
    const feedbackElement = document.getElementById('feedback');
    const scoreElement = document.getElementById('score');
    const submitAnswerButton = document.getElementById('submit-answer');

    const loadNextQuestion = () => {
        if (currentQuestionIndex < TOTAL_QUESTIONS) {
            const { question, correctAnswer } = generateQuestion();
            questionElement.textContent = `Вопрос ${currentQuestionIndex + 1}: ${question} = ?`;
            feedbackElement.textContent = '';
            answerInput.value = '';

            submitAnswerButton.onclick = () => {
                const userAnswer = Number(answerInput.value);
                if (userAnswer === correctAnswer) {
                    score++;
                    feedbackElement.textContent = 'Правильно!';
                } else {
                    feedbackElement.textContent = `Неправильно. Правильный ответ ${correctAnswer}.`;
                }
                currentQuestionIndex++;
                scoreElement.textContent = `Очки: ${score} из ${TOTAL_QUESTIONS}`;

                // Load the next question after a short delay
                setTimeout(loadNextQuestion, 1000); // 1 second delay
            };
        } else {
            questionElement.textContent = 'Викторина завершена!';
            feedbackElement.textContent = `Ваши очки ${score} из ${TOTAL_QUESTIONS}`;
            submitAnswerButton.style.display = 'none';
        }
    };

    // Start the quiz with the first question
    loadNextQuestion();
};

playQuiz();
