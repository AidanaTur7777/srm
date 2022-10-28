import cl from "./recipients.module.scss";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRecipients,
  setRecipientinfo,
  setRecipientInformation,
} from "../../features/recipients/recipients";
import { Input, Select } from "antd";

const Recipients = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecipients());
  }, [dispatch]);
  const handleSubmit = () => {
    dispatch(fetchRecipients(state));
    console.log(state);
  };

  const [state, setState] = useState({
    full_name: "",
    status: "",
    credit_history: null,
    phone: "",
    address: "",
    actual_address: "",
    income_statement: null,
  });
  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <section className={cl.recipients__container}>
        <div className={cl.recipients__content}>
          <h2>ФИО залогодателя</h2>
          <input
            className={cl.recipients__input}
            type="text"
            name="full_name"
            onChange={handleInput}
          />
          <h2>Семейное положение:</h2>
          <Select
            className={cl.recipients__accor}
            onChange={(e) => setState({ ...state, status: e })}
          >
            <Select.Option value="married">Женат/Замужем</Select.Option>
            <Select.Option value="divorced">Разведен</Select.Option>
            <Select.Option value="widow/widower">Вдова/Вдовец</Select.Option>
            <Select.Option value="single">Холост/Незамужем</Select.Option>
          </Select>
          <h2>Credit history</h2>
          <input
            type="file"
            onChange={(e) => {
              setState({
                ...state,
                credit_history: e.target.value,
              });
            }}
          />
          <h2>Номер телефона:</h2>
          <input
            className={cl.recipients__input}
            type="text"
            name="phone"
            onChange={handleInput}
          />
          <h2>Адрес прописки:</h2>
          <input
            className={cl.recipients__input}
            type="text"
            name="address"
            onChange={handleInput}
          />

          <h2>Адрес фактический:</h2>
          <input
            className={cl.recipients__input}
            type="text"
            name="actual_address"
            onChange={handleInput}
          />
          <h2>icome startement:</h2>
          <input type="file" />
        </div>
        <Button onClick={handleSubmit}>Submit</Button>
      </section>
    </div>
  );
};

export default Recipients;
