import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/Button/Button";
import { Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import cl from "../../pages/Counterparties/counterparties.module.scss";
import { fetchCounterparties } from "../../features/counterparties/counterpartiesSlice";
import { Modal } from "antd";
import Recipients from "../../pages/Recipients/Recipients";
import { BsPlusLg } from "react-icons/bs";

const Entities = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCounterparties());
  }, [dispatch]);
  const handleSubmit = () => {
    dispatch(fetchCounterparties(state));
    console.log(state);
  };
  const [state, setState] = useState({
    id_credit_spec: "",
    full_name: "",
    credit_type: "",
    status: "",
    credit_sum: "",
    marital_status: "",
    credit_history: new FormData(),
    phone: "",
    address: "",
    client_actual_address: "",
    guarantor: "",
    income_statement: new FormData(),
    mortgaged_property: "",
    contracts: new FormData(),
    report: new FormData(),
    monitoring_report: new FormData(),
  });
  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
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
    <>
      <h2>Id credit spec:</h2>
      <input
        className={cl.counterparties__input}
        type="text"
        name="id_credit_spec"
        onChange={handleInput}
      />
      <h2>ФИО представителя:</h2>
      <input
        className={cl.counterparties__input}
        type="text"
        name="full_name"
        onChange={handleInput}
      />
      <h2>id company:</h2>
      <div>
        <Select className={cl.counterparties__accor}>
          <Select.Option value="demo">Выбрать</Select.Option>
          <Select.Option value="demo-2">Выбор 2</Select.Option>
          <Select.Option value="demo-3">Выбор 3</Select.Option>
        </Select>
        <BsPlusLg className={cl.add__svg} />
      </div>
      <h2>ИНН:</h2>
      <input
        className={cl.counterparties__input}
        type="text"
        name="full_name"
        onChange={handleInput}
      />
      <h2>Тип кредита:</h2>
      <Select
        id="credit_type"
        className={cl.counterparties__accor}
        onChange={(e) => setState({ ...state, credit_type: e })}
      >
        <Select.Option value="LS">Лизинг</Select.Option>
        <Select.Option value="CR">Кредит</Select.Option>
      </Select>
      <h2>Статус клиента:</h2>
      <Select
        className={cl.counterparties__accor}
        onChange={(e) => setState({ ...state, status: e })}
      >
        <Select.Option value="success">Принят</Select.Option>
        <Select.Option value="processing">Обработка</Select.Option>
        <Select.Option value="discussion">На рассмотрении</Select.Option>
        <Select.Option value="denied">Отказано</Select.Option>
      </Select>
      <h2>Сумма кредита:</h2>
      <p className={cl.block__input}>
        <span>Введите нужную сумму</span>
        <input
          className={cl.counterparties__input}
          type="text"
          name="credit_sum"
          onChange={handleInput}
        />
      </p>
      <h2>Кредитная история:</h2>
      <input
        type="file"
        onChange={(e) =>
          setState({
            ...state,
            credit_history: state.credit_history.append("file", e.target.value),
          })
        }
      />
      <h2>Телефон компании:</h2>
      <input
        className={cl.counterparties__input}
        type="text"
        onChange={handleInput}
        name="phone"
      />
      <h2>Юридическии адрес:</h2>
      <input
        className={cl.counterparties__input}
        type="text"
        onChange={handleInput}
        name="phone"
      />
      <h2>Адрес фактический</h2>
      <input
        className={cl.counterparties__input}
        type="text"
        placeholder="Тот же что и по прописке"
        onChange={handleInput}
        name="client_actual_address"
      />
      <h2>Залоговое имущество:</h2>
      <input
        className={cl.counterparties__input}
        type="text"
        onChange={handleInput}
        name="guarantor"
      />
      <h2>Договора с подрядчиками и поставщиками:</h2>
      <input
        type="file"
        onChange={(e) =>
          setState({
            ...state,
            contracts: state.contracts.append("file", e.target.value),
          })
        }
      />
      <h2>Отчёт подрядчиков и поставщиков об оказанной услуге:</h2>
      <input
        type="file"
        onChange={(e) =>
          setState({
            ...state,
            report: state.report.append("file", e.target.value),
          })
        }
      />
      <h2>Отчёт по мониторингу:</h2>
      <input
        type="file"
        onChange={(e) =>
          setState({
            ...state,
            monitoring_report: state.monitoring_report.append(
              "file",
              e.target.value
            ),
          })
        }
      />
      <h2>Источник дохода:</h2>
      <div>
        <Select className={cl.counterparties__accor}>
          <Select.Option value="demo">Выбрать</Select.Option>
          <Select.Option value="demo-2">Выбор 2</Select.Option>
          <Select.Option value="demo-3">Выбор 3</Select.Option>
        </Select>
        <BsPlusLg className={cl.add__svg} />
      </div>
      <h2>Средний доход в месяц:</h2>
      <input
        className={cl.counterparties__input}
        type="text"
        onChange={handleInput}
        name="guarantor"
      />
      <h2>Размер собственного вклада:</h2>
      <input
        className={cl.counterparties__input}
        type="text"
        onChange={handleInput}
        name="guarantor"
      />
      <h2>Активы на момент анализа:</h2>
      <input
        className={cl.counterparties__input}
        type="text"
        onChange={handleInput}
        name="guarantor"
      />
      <h2>Текущие кредиты:</h2>
      <input
        className={cl.counterparties__input}
        type="text"
        onChange={handleInput}
        name="guarantor"
      />
      <h2>Кредитный специалист:</h2>
      <Select
        className={cl.counterparties__accor}
        onChange={(e) => setState({ ...state, status: e })}
      >
        <Select.Option value="success">Принят</Select.Option>
        <Select.Option value="processing">Обработка</Select.Option>
        <Select.Option value="discussion">На рассмотрении</Select.Option>
        <Select.Option value="denied">Отказано</Select.Option>
      </Select>
      <h2>Залоговое имущество:</h2>
      <div>
        <Select className={cl.counterparties__accor}>
          <Select.Option value="demo">Выбрать</Select.Option>
          <Select.Option value="demo-2">Выбор 2</Select.Option>
          <Select.Option value="demo-3">Выбор 3</Select.Option>
        </Select>
        <BsPlusLg className={cl.add__svg} />
      </div>
      <h2>Переговоры:</h2>
      <div>
        <Select className={cl.counterparties__accor}>
          <Select.Option value="demo">Выбрать</Select.Option>
          <Select.Option value="demo-2">Выбор 2</Select.Option>
          <Select.Option value="demo-3">Выбор 3</Select.Option>
        </Select>
        <BsPlusLg className={cl.add__svg} />
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Recipients />
      </Modal>
    </>
  );
};

export default Entities;
