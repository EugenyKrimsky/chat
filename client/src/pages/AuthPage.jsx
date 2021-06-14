import React  from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import RegisterPage from './RegisterPage'
import c from './AuthPage.module.scss'

const AuthPage = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    function submitClick(e) {
        e.preventDefault()
    }
    return (
        <div className={c.formBlock}>
            <form className={c.authForm}>
                <h1 className={c.h1}>Chat | Authorization</h1>
                <div className={c.inputBlock}>
                    <label className={c.label} htmlFor="email">email:</label>
                    <input 
                        className={c.authInput}
                        type="text"
                        name="email"
                        onChange={changeHandler}
                    />
                </div>
                <div className={c.inputBlock}>
                    <label className={c.label} htmlFor="password">password:</label>
                    <input
                        className={c.authInput}
                        type="password"
                        name="password"
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <input className={c.authCheckbox} type="checkbox" name="check"/>
                    <label className={c.label} htmlFor="check">remember password</label>
                </div>
                <button className={c.authButton} onClick={submitClick}>Sign in</button>
                <p className={c.signUpLink}>Don't have an account?<NavLink to={'/register'}>sss</NavLink></p>
            </form>
        </div>   
    )
  }
  
  export default AuthPage;