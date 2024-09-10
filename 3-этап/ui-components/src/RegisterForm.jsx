import React from 'react'
import Input from './components/Input/Input'
import Button from './components/Button/Button'

const RegisterForm = () => {
  return (
    <div className='register-form'>
        <h1>Регистрация</h1>
        <form>
            <Input placeholder='Email'/>
            <Input placeholder='Password'/>
            <Input placeholder='Confirm Password'/>
            <Button variant='primary'>Регистрация</Button>
        </form>
    </div>
  )
}

export default RegisterForm