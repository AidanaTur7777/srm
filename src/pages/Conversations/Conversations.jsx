import React, { useState } from "react";
import GlobalSvgSelector from "../../assets/icons/GlobalSvgSelector";
import Button from "../../components/Button/Button";
import Layout from "../../Layout/Layout";
import cl from "./conversations.module.scss";

const Conversations = () => {

  const [value, setValue] = useState(1);

  function changeValue(e) {
    setValue(e.target.value);
  }
  return (
    <Layout>
      <div className={cl.conversations}>
        <div className={cl.conversations__checkboxes}>
          <label>
            <span>Телефонные разговоры</span>
            <input
              type="radio"
              name="radio"
              value="1"
              checked={value === "1" ? true : false}
              onChange={changeValue}
            />
          </label>
          <label>
            <span>Очный разговор</span>
            <input
              type="radio"
              name="radio"
              value="2"
              checked={value === "2" ? true : false}
              onChange={changeValue}
            />
          </label>
        </div>
        <div className={cl.conversations__category}>
          <h2 className={cl.conversations__title}>ФИО специалиста: </h2>
          <input className={cl.conversations__input} />
        </div>
        <div className={cl.conversations__category}>
          <h2 className={cl.conversations__title}>Дата: </h2>
          <input className={cl.conversations__input} />
        </div>
        <div className={cl.conversations__category}>
          <h2 className={cl.conversations__title}>Тема разговора: </h2>
          <textarea className={cl.conversations__textarea}></textarea>
          <div className={cl.conversations__fileLoader}>
            <label for="upload-photo">Загрузить</label>
            <input type="file" name="photo" id="upload-photo" style={{opacity: 0, position: "absolute"}} />
            <GlobalSvgSelector id="clip" />
          </div>
        </div>
        <Button />
      </div>
    </Layout>
  );
};

export default Conversations;
