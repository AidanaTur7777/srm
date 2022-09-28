import cl from "./recipients.module.scss";
import React, { useState } from "react";
import { Modal, Button } from "antd";

const Recipients = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <section className={cl.recipients__container}>
        <div className={cl.recipients__content}>
          <h2>ФИО залогодателя</h2>
          <input className={cl.recipients__input} type="text" />

          <h2>Семейное положение:</h2>
          <select id={cl.recipients__accor}>
            <option value="Выбрать">Выбрать</option>
          </select>
          <h2>Credit history</h2>
          <input type="file" />

          <h2>Номер телефона:</h2>
          <input className={cl.recipients__input} type="number" />
          <h2>Адрес прописки:</h2>
          <input className={cl.recipients__input} type="text" />

          <h2>Адрес фактический:</h2>
          <input className={cl.recipients__input} type="number" />
          <h2>icome startement:</h2>
          <input type="file" />

          <h2>Залоговое имущество:</h2>
          <input className={cl.recipients__input} type="text" />
          <h2>Местонахождение залога:</h2>

          <input className={cl.recipients__input} type="text" />
          <h2>Document</h2>
          <input type="file" />
        </div>
        <Button
          type="primary"
          onClick={showModal}
          style={{
            background: "#42B4F4",
            width: "324px",
            height: "63px",
            fontSize: "20px",
            borderRadius: "5px",
            marginTop: "20px"
          }}
        >
          Submit
        </Button>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <h2>Ваш залог принят</h2>
        </Modal>
      </section>
    </div>
  );
};

export default Recipients;
