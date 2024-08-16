let question__text = document.querySelector(".question__text");
let question__input = document.querySelector(".question__input");
let question__btn = document.querySelector(".question__btn");
let question__score = document.querySelector(".question__score");

let getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
let generateQuestion = () => {
  let num1 = getRandomInt(1, 10);
  let num2 = getRandomInt(1, 10);
  let operators = ["+", "-", "*"];
  let result;
  let operator = operators[getRandomInt(0, operators.length - 1)];
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
  }
  return {
    question: `${num1} ${operator} ${num2}`,
    correctAnswer: result,
  };
};


let playQuiz = () => {
  const TOTAL_QUESTIONS = 5;
  let score = 0;
  let currentQuestionIndex = 0;

  const loadQuestion = () => {
    if (currentQuestionIndex < TOTAL_QUESTIONS) {
      let { question, correctAnswer } = generateQuestion();
      question__text.textContent = `Вопрос ${currentQuestionIndex + 1}: ${question}?`;

      question__btn.onclick = () => {
        let userAnswer = Number(question__input.value);
        if (userAnswer === correctAnswer) {
          score++;
          question__score.textContent = 'Правильно!';
        } else {
          question__score.textContent = `Неправильно! Правильный ответ: ${correctAnswer}`;
        }

        currentQuestionIndex++;
        question__input.value = "";

        if (currentQuestionIndex < TOTAL_QUESTIONS) {
          loadQuestion();
        } else {
          question__text.textContent = "Игра окончена!";
          question__score.textContent = `Ваш итоговый счет: ${score} из ${TOTAL_QUESTIONS}`;
          question__btn.disabled = true;
        }
      };
    }
  };

  loadQuestion();
};

playQuiz();