import React  from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import c from './RegisterPage.module.scss'

const RegisterPage = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        passwordRepeat: ''
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
                <div className={c.inputBlock}>
                    <label className={c.label} htmlFor="password">repeat password:</label>
                    <input
                        className={c.authInput}
                        type="password"
                        name="password"
                        onChange={changeHandler}
                    />
                </div>
                <button className={c.authButton} onClick={submitClick}>Sign up</button>
                <p className={c.signP}>Have an account? <NavLink to='/login' className={c.link}>Log in</NavLink></p>
            </form>
        </div>   
    )
  }
  
  export default RegisterPage;