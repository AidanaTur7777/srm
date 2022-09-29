import React from "react";
import Button from "../../components/Button/Button";
import cl from "./documents.module.scss";

const Documents = () => {
  return (
    <div className={cl.documents}>
      <div className={cl.documents__category}>
        <h2 className={cl.documents__title}>
          Заключение кредитного эксперта (скан)
        </h2>
        <input type="file" />
      </div>
      <div className={cl.documents__category}>
        <h2 className={cl.documents__title}>Решение КК (скан)</h2>
        <input type="file" />
      </div>
      <div className={cl.documents__category}>
        <h2 className={cl.documents__title}>
          Все заключенные договора, перечень и сканы:
        </h2>
        <input type="file" />
      </div>
      <div className={cl.documents__category}>
        <h2 className={cl.documents__title}>Скоринг:</h2>
        <input className={cl.documents__input}/>
      </div>
      <div className={cl.documents__category}>
        <h2 className={cl.documents__title}>id client:</h2>
        <input className={`${cl.documents__input} ${cl.documents__input__short}`}/>
      </div>
      <div className={cl.documents__category}>
        <h2 className={cl.documents__title}>id spec:</h2>
        <input className={`${cl.documents__input} ${cl.documents__input__short}`}/>
      </div>
      <Button/>
    </div>
  );
};

export default Documents;
