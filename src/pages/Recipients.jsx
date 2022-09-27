import React from "react";
import cl from "../scss/recipients.module.scss";

const Recipients = () => {
  return <div>
    <section className={cl.recipients__container}>
      <div className={cl.recipients__content}>
        <h2>
          ФИО залогодателя
        </h2>
        <input
          className={cl.recipients__input}
          type="text"
        />

        <h2>
          Семейное положение:
        </h2>
        <select id={cl.recipients__accor}>
          <option value="Выбрать" >Выбрать</option>
        </select>
        <h2>
          Credit history
        </h2>
        <input
          type="file"
        />

        <h2>
          Номер телефона:
        </h2>
        <input
          className={cl.recipients__input}
          type="number"
        />
        <h2>
          Адрес прописки:
        </h2>
        <input
          className={cl.recipients__input}
          type="text"
        />

        <h2>
          Адрес фактический:
        </h2>
        <input
          className={cl.recipients__input}
          type="number"
        />
        <h2>
          icome startement:
        </h2>
        <input
          
          type="file" />

        <h2>
          Залоговое имущество:
        </h2>
        <input
          className={cl.recipients__input}
          type="text" />
        <h2>
          Местонахождение залога:
        </h2>

        <input
          className={cl.recipients__input}
          type="text" />
        <h2>
          Document
        </h2>
        <input
          
          type="file" />

      </div>
      <button className={cl.recipients__btn}>
        Submit
      </button>

    </section>

  </div>;
};

export default Recipients;
