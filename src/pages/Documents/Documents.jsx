import React from "react";
import Input from "../../components/Input/Input";
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
        <Input width="393px" height="60px" />
      </div>
      <div className={cl.documents__category}>
        <h2 className={cl.documents__title}>id client:</h2>
        <Input width="393px" height="47px" />
      </div>
      <div className={cl.documents__category}>
        <h2 className={cl.documents__title}>id spec:</h2>
        <Input width="393px" height="47px" />
      </div>
      <Button/>
    </div>
  );
};

export default Documents;
