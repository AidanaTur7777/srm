import React from "react";
import cl from "../scss/companies.module.scss";

const Companies = () => {
  return (
    <div>
      <section className={cl.companies__container}>
        <div className={cl.inputs__col}>
          <div>
            <h2 className={cl.companies__title}>Наименование компании</h2>
            <input
              className={cl.input__phone}
              type="text"
            />
          </div>
          <div>
            <h2 className={cl.companies__title}>Юредический адрес</h2>
            <input
              className={cl.input__phone}
              type="text"

            />
          </div>
          <div>
            <h2 className={cl.companies__title}>Фактический адрес</h2>
            <input
              className={cl.input__phone}
              type="text"

            />
          </div>
          <div>
            <h2 className={cl.companies__title}>Номер телефона</h2>
            <input
              className={cl.input__phone}
              type="number"

            />
          </div>
          <div>
            <h2 className={cl.companies__title}>Сфера деятельности</h2>
            <input
              className={cl.input__phone}
              type="text"

            />
          </div>
          <div>
            <h2 className={cl.companies__title}>Okipo</h2>
            <input
              className={cl.input__phone}
              type="text"

            />
          </div>
          <div>
            <h2 className={cl.companies__title}>inn</h2>
            <input
              className={cl.input__phone}
              type="text"

            />
          </div>
          <div>
            <h2 className={cl.companies__title}>Register number</h2>
            <input
              className={cl.input__phone}

              type="text"
            />
          </div>

          <button className={cl.companies__btn}>
            Submit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Companies;
