import React from "react";
import Button from "../../components/Button/Button";
import Layout from "../../Layout/Layout";
import cl from "./MortgagedProperty.module.scss";

const MortgagedProperty = () => {
  return (
    <Layout>
      <div className={cl.mortgagedProperty}>
        <div className={cl.mortgagedProperty__category}>
          <h2 className={cl.mortgagedProperty__title}>Залоговое имущество</h2>
          <input type="text" className={cl.mortgagedProperty__input} />
        </div>
        <div className={cl.mortgagedProperty__category}>
          <h2 className={cl.mortgagedProperty__title}>
            Местонахождение залога
          </h2>
          <input type="text" className={cl.mortgagedProperty__input} />
        </div>
        <div className={cl.mortgagedProperty__category}>
          <h2 className={cl.mortgagedProperty__title}>
            Документы на залоговое имущество
          </h2>
          <input type="file"/>
        </div>
        <div className={cl.mortgagedProperty__category}>
          <h2 className={cl.mortgagedProperty__title}>
            Фотографии залогового имущество
          </h2>
          <input type="file"/>
        </div>
        <Button>Submit</Button>
      </div>
    </Layout>
  );
};

export default MortgagedProperty;
