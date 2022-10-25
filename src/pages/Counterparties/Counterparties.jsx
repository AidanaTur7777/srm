import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Layout from "../../Layout/Layout";
import cl from "./counterparties.module.scss";
import {motion} from 'framer-motion'

const Counterparties = () => {
  const { loading, userInfo, error } = useSelector((state) => state.user);
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  return (
    <Layout>
      <div>
        <motion.section
          initial={{ x: "0", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 2 }}
          className={cl.counterparties__container}
        >
          <div className={cl.counterparties__content}>
            <h2>ФИО клиента:</h2>
            <input className={cl.counterparties__input} type="text" />
            <h2>Тип кредита:</h2>
            <select id={cl.counterparties__accor}>
              <option value="Выбрать">Выбрать</option>
            </select>

            <h2>Статус клиента:</h2>
            <input className={cl.counterparties__input} type="text" />
            <h2>Сумма кредита:</h2>

            <p className={cl.block__input}>
              <span>Введите нужную сумму</span>
              <input className={cl.counterparties__input} type="text" />
            </p>

            <h2>Семейное положение:</h2>
            <select id={cl.counterparties__accor}>
              <option value="Выбрать">Выбрать</option>
            </select>

            <h2>Кредитная история</h2>
            <input type="file" />

            <h2>Номер телефона:</h2>
            <input className={cl.counterparties__input} type="text" />

            <h2>Адрес прописки:</h2>
            <input className={cl.counterparties__input} type="text" />

            <h2>Адрес фактический</h2>
            <input
              className={cl.counterparties__input}
              type="text"
              placeholder="Тот же что и по прописке"
            />

            <h2>Поручитель:</h2>

            <input className={cl.counterparties__input} type="text" />

            <h2>Справка о доходах:</h2>

            <input type="file" />

            <h2>Комания клиента:</h2>
            <input className={cl.counterparties__input} type="text" />
            <h2>Залоговое имущество:</h2>

            <input className={cl.counterparties__input} type="text" />

            <h2>Договора с подрядчиками и поставщиками:</h2>
            <input type="file" />
            <h2>Отчёт подрядчиков и поставщиков об оказанной услуге:</h2>
            <input type="file" />
            <h2>Отчёт по мониторингу:</h2>
            <input type="file" />
            <h2>id guarantor:</h2>
            <input type="file" />
            <h2>id company:</h2>
            <input type="file" />
            <h2>id property:</h2>
            <input type="file" />
            <h2>id num parley</h2>
            <input type="file" />
            <Button />
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default Counterparties;
