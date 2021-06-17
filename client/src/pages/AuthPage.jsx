import React  from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import useHttp from '../hooks/http.hook'
import c from './AuthPage.module.scss'

const AuthPage = () => {
    const { loading, request, error } = useHttp()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log('Data', data)
        } catch (e) {}
    }
    return (
        <div className={c.formBlock}>
            <div className={c.authForm}>
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
                    <input className={c.authCheckbox} type="checkbox" name="check" text="Sign in"/>
                    <label className={c.label} htmlFor="check">remember password</label>
                </div>
                <input type="button" className={c.authButton} onClick={registerHandler}/>
                <p className={c.signP}>Don't have an account? <NavLink to='/registration' className={c.link}>Sign up</NavLink></p>
            </div>
        </div>   
    )
}
  
export default AuthPage;