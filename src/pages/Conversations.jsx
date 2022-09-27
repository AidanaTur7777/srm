import React, { useState } from "react";
import GlobalSvgSelector from "../assets/icons/GlobalSvgSelector";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import cl from "../scss/conversations.module.scss";
import { Radio } from "antd";

const Conversations = () => {
  return (
    <div className={cl.conversations}>
      <div className={cl.conversations__checkboxes}>
        <label>
          <span>Телефонные разговоры</span>
          <input type="radio" name="" id="" checked="true"/>
        </label>
        <label>
          <span>Очный разговор</span>
          <input type="radio" name="" id="" />
        </label>
      </div>
      <div className={cl.conversations__category}>
        <h2 className={cl.conversations__title}>ФИО специалиста: </h2>
        <Input />
      </div>
      <div className={cl.conversations__category}>
        <h2 className={cl.conversations__title}>Дата: </h2>
        <Input />
      </div>
      <div className={cl.conversations__category}>
        <h2 className={cl.conversations__title}>Тема разговора: </h2>
        <Input height="418px" />
        <div className={cl.conversations__fileLoader}>
          <span>Загрузить файл</span>
          <GlobalSvgSelector id="clip" />
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Conversations;
