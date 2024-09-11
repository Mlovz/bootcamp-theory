import { useState } from "react"
import styles from "./FAQ.module.css"

const FAQ = () => {
  let arr = [
    {
      question: "Вопрос1",
      answer: "Ответ1",
      id: 1,
    },
    {
      question: "Вопрос2",
      answer: "Ответ2",
      id: 2,
    },
    {
      question: "Вопрос3",
      answer: "Ответ3",
      id: 3,
    },
  ]
  let [question, setQuestion] = useState(arr)
  let [answer, setAnswer] = useState("")
  function funAnswer(id) { 
    let answerObj = arr.find((item) => item.id === id)
    setAnswer(answerObj.answer)

  }
  return (
    <div className={styles.card}>
      {
        question.map((item) => {
            return (
              <span onClick={() => funAnswer(item.id)} key={item.id}>{item.question}</span>
            )
        })
      }
      <p>{answer}</p>
    </div>
  );
};

export default FAQ;