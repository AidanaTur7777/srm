import classNames from 'classnames'
import React from 'react'
import cl from './Login.module.scss'

const Login = () => {
  return (
    <div className={classNames(cl.login_page, 'row')}>
      <div className={cl.title}>
        <h1>Вход</h1>
      </div>
      <div className={cl.login}>
        <h4 className={cl.login_title}>Логин:</h4>
        <input type="text" className={cl.input} />
      </div>
      <div className={cl.password}>
        <h4 className={cl.password_title}>Пароль:</h4>
        <input type="password" className={cl.input} />
      </div>
      <div className={cl.link}>
        <a href="/registration">Регистрация</a>
      </div>
      <div className="d-flex justify-content-center">
        <button className={cl.button}>Войти</button>
      </div>
    </div>
  )
}

export default Login
