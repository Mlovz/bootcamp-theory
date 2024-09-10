import React from 'react'
import Input from './components/Input/Input'
import Button from './components/Button/Button'

const LoginForm = () => {
  return (
    <div className='login-form'>
        <h1>Войти</h1>
        <form action="">
            <Input placeholder='Email'/>
            <Input placeholder='Password'/>
            <Button variant='secondary'>Войти</Button>
        </form>
    </div>
  )
}

export default LoginForm