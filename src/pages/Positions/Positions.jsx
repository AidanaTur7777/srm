import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import cl from "./positions.module.scss";

const Positions = () => {
  return (
    <div className={cl.positions}>
      <div className={cl.positions__content}>
        <h2 className={cl.positons__title}>Наименование должности</h2>
        <label>
          <span>Ввести должность</span>
          <Input width="100%" />
        </label>
        <Button />
      </div>
    </div>
  );
};

export default Positions;
