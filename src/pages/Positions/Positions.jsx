import React from "react";
import Button from "../../components/Button/Button";
import Layout from "../../Layout/Layout";
import cl from "./positions.module.scss";

const Positions = () => {
  return (
    <Layout>
      <div className={cl.positions}>
        <div className={cl.positions__content}>
          <h2 className={cl.positons__title}>Наименование должности</h2>
          <label>
            <span>Ввести должность</span>
            <input />
          </label>
          <Button />
        </div>
      </div>
    </Layout>
  );
};

export default Positions;
