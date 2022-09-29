import classNames from 'classnames'
import React from 'react'
import cl from './registration.module.scss'

const Registration = () => {
  return (
    
    <div className={classNames(cl.registration_page, 'row')}>
      <div className={cl.title}>
        <h1>Регистрация</h1>
      </div>
      <div className={cl.name}>
        <h4 className={cl.password_title}>ФИО:</h4>
        <input type="text" className={cl.input} />
      </div>
      <div className={cl.number}>
        <h4 className={cl.number_title}>Номер телефона:</h4>
        <input type="text" className={cl.input} />
      </div>
      <div className={cl.job}>
        <h4 className={cl.job_title}>Должность:</h4>
        <select id={cl.counterparties__accor}>
          <option value="Выбрать">Выбрать</option>
          <option value="Выбрать">Выбрать</option>
        </select>
      </div>

      <div className={cl.login}>
        <h4 className={cl.login_title}>Логин:</h4>
        <input type="text" className={cl.input} />
      </div>
      <div className={cl.password}>
        <h4 className={cl.password_title}>Пароль:</h4>
        <input type="password" className={cl.input} />
      </div>
      <div className={cl.password}>
        <h4 className={cl.password_title}>Подтвердить пароль:</h4>
        <input type="password" className={cl.input} />
      </div>
      <div className={cl.link}>
        <a href="/login">Войти</a>
      </div>
      <div className="d-flex justify-content-center">
        <button className={cl.button}>Зарегистрироваться</button>
      </div>
    </div>
  )
}

export default Registration
