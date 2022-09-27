import React from 'react'
import cl from "../scss/counterparties.module.scss"


const Counterparties = () => {
  return (
    <div>
      <section className={cl.counterparties__container}>
        <div className={cl.counterparties__content}>
          <h2>ФИО клиента:</h2>
          <input
            className={cl.counterparties__input}
            type="text"
          />
          <h2>Тип кредита:</h2>
          <select id={cl.counterparties__accor}>
            <option value="Выбрать" >Выбрать</option>
          </select>

          <h2>Статус клиента:</h2>
          <input
            className={cl.counterparties__input}
            type="text"
          />
          <h2>
            Сумма кредита:
          </h2>

          <p className={cl.block__input}>
            <span>Введите нужную сумму</span>
            <input
              className={cl.counterparties__input}
              type="text"
            />
          </p>

          <h2>
            Семейное положение:
          </h2>
          <select id={cl.counterparties__accor}>
            <option value="Выбрать" >Выбрать</option>
          </select>

          <h2>
            Кредитная история
          </h2>
          <input type="file" />


          <h2>
            Номер телефона:
          </h2>
          <input
            className={cl.counterparties__input}
            type="text"
          />

          <h2>
            Адрес прописки:
          </h2>
          <input
            className={cl.counterparties__input}
            type="text"
          />

          <h2>
            Адрес фактический
          </h2>
          <input
            className={cl.counterparties__input}
            type="text"
            placeholder='Тот же что и по прописке'
          />

          <h2>
            Поручитель:
          </h2>

          <input
            className={cl.counterparties__input}
            type="text"
          />
        </div>

        <h2>
          Справка о доходах:
        </h2>

        <p className={cl.block__input__btn}>
          <input type="file" />

          <button className={cl.counterparties__btn}>
            Submit
          </button>
        </p>

      </section>
    </div>
  )
}

export default Counterparties
