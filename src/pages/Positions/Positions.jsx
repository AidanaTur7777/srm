import React from "react";
import Button from "../../components/Button/Button";
import Layout from "../../Layout/Layout";
import cl from "./positions.module.scss";
import { motion } from "framer-motion";

const Positions = () => {
  return (
    <Layout>
      <motion.div
        initial={{ x: "0", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 2 }}
        className={cl.positions}
      >
        <div className={cl.positions__content}>
          <h2 className={cl.positons__title}>Наименование должности</h2>
          <label>
            <span>Ввести должность</span>
            <input />
          </label>
          <Button />
        </div>
      </motion.div>
    </Layout>
  );
};

export default Positions;
