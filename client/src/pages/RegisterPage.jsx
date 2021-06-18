import React  from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import useHttp from '../hooks/http.hook'
import c from './RegisterPage.module.scss'

const RegisterPage = () => {
    const { loading, request, error } = useHttp();

    const [form, setForm] = useState({
        login: '',
        email: '',
        password: ''
    })

    const [passwordRepeat, setPasswordRepeat] = useState('');

    const changeHandler = event => {
        (event.target.name === 'passwordRepeat') ? 
            setPasswordRepeat(event.target.value) : 
            setForm({ ...form, [event.target.name]: event.target.value });
    }

    const registerHandler = async () => {
        if (form.password === passwordRepeat) {
            try {
                const data = await request('/api/auth/register', 'POST', {...form})
                console.log('Data', data)
                localStorage.setItem("userLogin", data.userLogin)
            } catch (e) {}
        } else {
            alert('The entered passwords don\'t match')
        }
    }
    return (
        <div className={c.formBlock}>
            <div className={c.authForm}>
                <h1 className={c.h1}>Chat | Registration</h1>
                <div className={c.inputBlock}>
                    <label className={c.label} htmlFor="login">Login:</label>
                    <input 
                        className={c.authInput}
                        type="text"
                        name="login"
                        onChange={changeHandler}
                    />
                </div>
                <div className={c.inputBlock}>
                    <label className={c.label} htmlFor="email">Email:</label>
                    <input 
                        className={c.authInput}
                        type="text"
                        name="email"
                        onChange={changeHandler}
                    />
                </div>
                <div className={c.inputBlock}>
                    <label className={c.label} htmlFor="password">Password:</label>
                    <input
                        className={c.authInput}
                        type="password"
                        name="password"
                        onChange={changeHandler}
                    />
                </div>
                <div className={c.inputBlock}>
                    <label className={c.label} htmlFor="password">Repeat password:</label>
                    <input
                        className={c.authInput}
                        type="password"
                        name="passwordRepeat"
                        onChange={changeHandler}
                    />
                </div>
                <input type="button" value="Sign up" className={c.authButton} onClick={registerHandler}/>
                <p className={c.signP}>Have an account? <NavLink to='/login' className={c.link}>Log in</NavLink></p>
            </div>
        </div>   
    )
  }
  
  export default RegisterPage;