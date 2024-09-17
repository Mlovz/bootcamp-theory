import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import './App.css'

function App() {
  async function fetchData() {
    const res = await axios.patch(`http://localhost:5501/items/${2}`,
      {
        nameProduct: "Название22222222 Продукта",
        priceProduct: "100$",
      },
    )
    console.log(res);
  }
  async function fetchData6() {
    const res = await axios.delete(`http://localhost:5501/items/${1}`,
    )
    console.log(res);
  }
  async function fetchData7() {
    const res = await axios.get(`http://localhost:5501/users/${"Name"}/posts/${"Post"}`,
    )
    console.log(res);
  }
  async function fetchData8() {
    const res = await axios.get(`http://localhost:5501/products`,
    )
    console.log(res);
  }
  async function fetchData9() {
    const res = await axios.get(`http://localhost:5501/products/${0}`,
    )
    console.log(res);
  }
  async function fetchData9() {
    const res = await axios.get(`http://localhost:5501/count`,
    )
    console.log(res);
  }
  return (
    <>
    <button onClick={fetchData9}>Показать</button>
    </>
  )
}

export default App
