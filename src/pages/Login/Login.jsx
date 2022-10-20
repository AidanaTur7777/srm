import classNames from 'classnames'
import React from 'react'
import cl from './Login.module.scss'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../features/user/userActions'
import { useEffect } from 'react'
import Error from '../../components/Error'

const Login = () => {
  const { loading, userInfo, error } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()
  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  const submitForm = (data) => {
    dispatch(userLogin(data))
  }

  return (
    <form
      className={classNames(cl.login_page, 'row')}
      onSubmit={handleSubmit(submitForm)}
    >
      <div className={cl.title}>
        <h1>Вход</h1>
      </div>
      {error && <Error>{error}</Error>}

      <div className={cl.login}>
        <h4 className={cl.login_title}>Логин:</h4>
        <input
          type="email"
          className={cl.input}
          {...register('email')}
          required
        />
      </div>
      <div className={cl.password}>
        <h4 className={cl.password_title}>Пароль:</h4>
        <input
          type="password"
          className={cl.input}
          {...register('password')}
          required
        />
      </div>
      <div className={cl.link}>
        <a href="/registration">Регистрация</a>
      </div>
      <div className="d-flex justify-content-center">
        <button className={cl.button} type="submit" disabled={loading}>
          Войти
        </button>
      </div>
    </form>
  )
}

export default Login
