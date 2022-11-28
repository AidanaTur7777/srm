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

const Registration = () => {
  const [customError, setCustomError] = useState(null);

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (success) navigate("/login");
  }, [navigate, userInfo, success]);

  const submitForm = (data) => {
    console.log(data);
    if (data.password !== data.password_confirm) {
      setCustomError("Password mismatch");
      return;
    }
    data.email = data.email.toLowerCase();

    dispatch(registerUser(data));
  };
  return (
    <form
      className={classNames(cl.registration_page, "row")}
      onSubmit={handleSubmit(submitForm)}
    >
      <div className={cl.title}>
        <h1>Регистрация</h1>
      </div>
      {error && <Error>{error}</Error>}
      {customError && <Error>{customError}</Error>}
      <div className={cl.name}>
        <h4 className={cl.password_title}>ФИО:</h4>
        <input
          type="text"
          className={cl.input}
          {...register("full_name")}
          required
        />
      </div>
      <div className={cl.number}>
        <h4 className={cl.number_title}>Номер телефона:</h4>
        <input
          className={cl.input}
          type="tel"
          {...register("phone_number")}
          required
        />
      </div>
      <div className={cl.job}>
        <h4 className={cl.job_title}>Должность:</h4>
        <select {...register("occupation")} required>
          {/* <option value="Выбрать" {...register('occupation')} required></option> */}
          <option value="admin" {...register("admin")} required>
            Кредитный админ
          </option>
          <option value="spec" {...register("spec")} required>
            Кредититный спец
          </option>
        </select>
      </div>

      <div className={cl.login}>
        <h4 className={cl.login_title}>Логин:</h4>
        <input
          type="email"
          {...register("email")}
          required
          className={cl.input}
        />
      </div>
      <div className={cl.password}>
        <h4 className={cl.password_title}>Пароль:</h4>
        <input
          type="password"
          className={cl.input}
          {...register("password")}
          required
        />
      </div>
      <div className={cl.password}>
        <h4 className={cl.password_title}> Подтвердить пароль:</h4>
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
      <div className="d-flex justify-content-center">
        <button className={cl.button} type="submit" disabled={loading}>
          Зарегистрироваться
        </button>
      </div>
    </form>
  );
};

export default Registration;
