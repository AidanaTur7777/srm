import React from "react";
import Button from "../../components/Button/Button";
import cl from "./companies.module.scss";
import Layout from "../../Layout/Layout";

const Companies = () => {
  return (
    <Layout>
      <div className={cl.companies}>
        <div className={cl.companies__category}>
          <h2 className={cl.companies__title}>Наименование компании</h2>
          <input className={cl.companies__input} type="text" />
        </div>
        <div className={cl.companies__category}>
          <h2 className={cl.companies__title}>Юридический адрес</h2>
          <input className={cl.companies__input} type="text" />
        </div>
        <div className={cl.companies__category}>
          <h2 className={cl.companies__title}>Фактический адрес</h2>
          <input className={cl.companies__input} type="text" />
        </div>
        <div className={cl.companies__category}>
          <h2 className={cl.companies__title}>Номер телефона</h2>
          <input className={cl.companies__input} type="text" />
        </div>
        <div className={cl.companies__category}>
          <h2 className={cl.companies__title}>Сфера деятельности</h2>
          <input className={cl.companies__input} type="text" />
        </div>
        <div className={cl.companies__category}>
          <h2 className={cl.companies__title}>Okipo</h2>
          <input className={cl.companies__input} type="text" />
        </div>
        <div className={cl.companies__category}>
          <h2 className={cl.companies__title}>inn</h2>
          <input className={cl.companies__input} type="text" />
        </div>
        <div className={cl.companies__category}>
          <h2 className={cl.companies__title}>Register number</h2>
          <input className={cl.companies__input} type="text" />
        </div>
        <Button />
      </div>
    </Layout>
  );
};

export default Companies;
