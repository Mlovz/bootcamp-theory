import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


const Header = () => {
  const store = useSelector((a) => a)
  const dispatch = useDispatch()

  
  const incr = () => {
    dispatch({type: 'I', payload: 10})
  }
  const decr = () => {
    dispatch({type: 'D', payload: 10})
  }

  return (
    <div className='header'>
        <div className="container">
            <div className="wrap">
                <Link to="/" className='h-logo'></Link>

                <button onClick={incr}>Incr</button>
                <button onClick={decr}>Decr</button>

                <div className='h-btns'>
                    <a href="/login" className='btn btn-login'>Войти</a>
                    <a href="/register" className='btn btn-register'>Регистрация</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header