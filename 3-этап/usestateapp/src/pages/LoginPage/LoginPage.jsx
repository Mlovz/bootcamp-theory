import React from 'react'
import './login.css'

const LoginPage = () => {
  return (
    <div className='login'>
      <h1>Войти</h1>
      <form className='login-form'>
          <input type="text" placeholder='Email' />
          <input type="password" placeholder='password' />
          <button>Войти</button>
      </form>
    </div>
  )
}

export default LoginPage