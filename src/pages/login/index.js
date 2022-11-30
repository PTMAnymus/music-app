import React from 'react'
import { LoginMain } from '../../utils/constants/images'
import  {Button}  from '../../components'
import './style.scss'

const Login = () => {
    return (
        <div className='login'>
            <div className='login__header'>
                <p>Welcome</p>
            </div>
            <div className='login__img'>
                <img src={LoginMain} alt="Login" />
            </div>
            <form className='login__form'>
                <input type="text" className='login__form__input' placeholder='input your email'/>
                <input type="text" className='login__form__input' placeholder='input your password'/>
                <Button />
            </form>
        </div>
    )
}

export default Login