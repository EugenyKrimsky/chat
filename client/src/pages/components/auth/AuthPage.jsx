import React  from 'react'
import c from './AuthPage.module.scss'

const AuthPage = () => {
    function submitClick(e) {
        e.preventDefault()
    }
    return (
        <div className={c.formBlock}>
            <form className={c.authForm}>
                <h1 className={c.h1}>Авторизация</h1>
                <div className={c.inputBlock}>
                    <label className={c.label} htmlFor="mail">Введите почту:</label>
                    <input className={c.authInput} type="text" placeholder="uksan93@gmail.com" name="mail"/>
                </div>
                <div className={c.inputBlock}>
                    <label className={c.label} htmlFor="password">Введите пароль:</label>
                    <input className={c.authInput} type="password" name="password"/>
                </div>
                <div>
                    <input className={c.authCheckbox} type="checkbox" name="check"/>
                    <label className={c.label} htmlFor="check">чужой компьютер</label>
                </div>
                <button className={c.authButton} onClick={submitClick}>войти</button>
            </form>
        </div>   
    )
  }
  
  export default AuthPage;