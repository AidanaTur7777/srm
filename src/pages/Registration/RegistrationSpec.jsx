import classNames from "classnames";
import React from "react";
import cl from "./registration.module.scss";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Error from "../../components/Error/Error";
import { registerUser } from "../../features/user/userActions";
import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";
import Success from "../../components/Success/Success";

const Registration = () => {
  const { registerLoading, registerError, registerSuccess } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const submitForm = (data) => {
    data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
  };
  useEffect(() => {
    if (registerSuccess) navigate("/login");
  },[registerSuccess]);
  return (
    <div className={cl.registration}>
      <form
        className={classNames(cl.registration__form, "row")}
        onSubmit={handleSubmit(submitForm)}
      >
        <h1 className={cl.registration__title}>Регистрация</h1>
        <div className={cl.registration__row}>
          <h4 className={cl.title}>ФИО:</h4>
          <input
            type="text"
            className={cl.input}
            {...register("full_name")}
            required
          />
        </div>
        <div className={cl.registration__row}>
          <h4 className={cl.title}>Номер телефона:</h4>
          <input
            className={cl.input}
            type="tel"
            {...register("phone_number")}
            required
          />
        </div>
        <div className={cl.registration__row}>
          <h4 className={cl.title}>Должность:</h4>
          <select {...register("occupation")} required>
            <option value="admin" {...register("admin")} required>
              Кредитный админ
            </option>
            <option value="spec" {...register("spec")} required>
              Кредититный спец
            </option>
          </select>
        </div>

        <div className={cl.registration__row}>
          <h4 className={cl.title}>Логин:</h4>
          <input
            type="email"
            {...register("email")}
            required
            className={cl.input}
          />
        </div>
        <div className={cl.registration__row}>
          <h4 className={cl.title}>Пароль:</h4>
          <input
            type="password"
            className={cl.input}
            {...register("password")}
            required
          />
        </div>
        <div className={cl.registration__row}>
          <h4 className={cl.title}> Подтвердить пароль:</h4>
          <input
            type="password"
            className={cl.input}
            {...register("password_confirm")}
            required
          />
        </div>
        <div className={cl.link}>
          <NavLink to="/login">Войти</NavLink>
        </div>
        {registerLoading && <Loading>Загрузка...</Loading>}
        {registerSuccess && <Success>Вы были успешно зарегестрированы</Success>}
        {registerError &&
          Object.values(registerError).map((item) => (
            <Error style={{ fontSize: "20px" }}>{item}</Error>
          ))}
        <Button type="submit" disabled={registerLoading}>
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
};

export default Registration;
