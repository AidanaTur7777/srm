import React, { useState } from "react";
import { useDispatch } from "react-redux";
import GlobalSvgSelector from "../../assets/icons/GlobalSvgSelector";
import Button from "../../components/Button/Button";
import { fetchConversations } from "../../features/conversations/conversationsSlice";
import cl from "./conversations.module.scss";

const ConversationsContent = () => {
  const [value, setValue] = useState(0);
  function changeValue(e) {
    setValue(e.target.value);
  }
  const [state, setState] = useState({
    is_meeting: value,
    name: "",
    date: "",
    time: "",
    desc: "",
    file_results_report: null,
    file_statistics: null,
  });
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(fetchConversations(state));
    console.log(state);
  };
  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  console.log(state.statistics);

  return (
    <div className={cl.conversations}>
      <div className={cl.conversations__checkboxes}>
        <label>
          <span>Телефонные разговоры</span>
          <input
            type="radio"
            name="radio"
            value="0"
            checked={value == "0" ? true : false}
            onChange={changeValue}
          />
        </label>
        <label>
          <span>Очный разговор</span>
          <input
            type="radio"
            name="radio"
            value="1"
            checked={value == "1" ? true : false}
            onChange={changeValue}
          />
        </label>
      </div>
      <div className={cl.conversations__category}>
        <h2 className={cl.conversations__title}>ФИО специалиста: </h2>
        <input
          className={cl.conversations__input}
          name="name"
          onChange={handleInput}
        />
      </div>
      <div className={cl.conversations__category}>
        <h2 className={cl.conversations__title}>Дата: </h2>
        <input
          className={cl.conversations__input}
          name="date"
          onChange={handleInput}
        />
      </div>
      <div className={cl.conversations__category}>
        <h2 className={cl.conversations__title}>Время: </h2>
        <input
          className={cl.conversations__input}
          name="time"
          onChange={handleInput}
        />
      </div>
      <div className={cl.conversations__category}>
        <h2 className={cl.conversations__title}>Тема разговора: </h2>
        <textarea
          className={cl.conversations__textarea}
          name="desc"
          onChange={handleInput}
        ></textarea>
        {/* <div className={cl.conversations__fileLoader}>
          <label for="upload-photo">Загрузить</label>
          <input
            type="file"
            name="photo"
            id="upload-photo"
            style={{ opacity: 0, position: "absolute" }}
          />
          <GlobalSvgSelector id="clip" />
        </div> */}
      </div>
      <div className={cl.conversations__category}>
        <h2 className={cl.conversations__title}>Отчёт по результатам: </h2>
        <input
          className={cl.conversations__file}
          type="file"
          name="results_report"
          onChange={async (e) => {
            setState({
              ...state,
              file_results_report: e.target.files[0],
            });
          }}
        />
      </div>
      <div className={cl.conversations__category}>
        <h2 className={cl.conversations__title}>Статистика: </h2>
        <input
          type="file"
          className={cl.conversations__file}
          name="statistics"
          onChange={(e) => {
            setState({
              ...state,
              file_statistics: e.target.files[0],
            });
          }}
        />
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default ConversationsContent;
