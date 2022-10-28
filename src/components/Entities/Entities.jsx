import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/Button/Button";
import { Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import cl from "../../pages/Counterparties/counterparties.module.scss";
import { fetchCounterparties } from "../../features/counterparties/counterpartiesSlice";
import { Modal } from "antd";
import Recipients from "../../pages/Recipients/Recipients";
import { BsPlusLg } from "react-icons/bs";
import { fetchEntities } from "../../features/entity/entitySlice";
import { getUserDetail } from "../../features/user/userActions";
import MortgagedProperty from "../../pages/MortgagedProperty/MortgagedProperty";
import ConversationsContent from "../../pages/Conversations/ConversationsContent";
import MortgagedPropertyContent from "../../pages/MortgagedProperty/MortgagedPropertyContent";
import CompaniesContent from "../../pages/Companies/CompaniesContent";
import Activites from "../Actives/Actives";

const Entities = () => {
  const dispatch = useDispatch();

  const { propertyInfo } = useSelector((state) => state.property);
  const { conversationInfo } = useSelector((state) => state.conversations);
  const [property, setProperty] = useState(propertyInfo ? propertyInfo.id : "");
  const [conversation, setConversation] = useState(
    conversationInfo ? conversationInfo.id : ""
  );
  useEffect(() => {
    setProperty(propertyInfo && propertyInfo.id);
    setConversation(conversationInfo && conversationInfo.id);
  }, [propertyInfo, conversationInfo]);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userToken"));
    dispatch(getUserDetail(token.access));
  }, [dispatch]);
  const handleSubmit = () => {
    dispatch(fetchEntities(state));
    console.log(state);
  };
  const { activitesInfo } = useSelector((state) => state.activites);
  const { companiesInfo }=useSelector(state=>state.companies)
  const [state, setState] = useState({
    id_credit_spec: "",
    client_company: "",
    full_name_director: "",
    inn: "",
    credit_type: "",
    status: "",
    credit_sum: "",
    phone: "",
    address: "",
    client_actual_address: "",
    mortgaged_property: "",
    average_salary: "",
    own_contribution: "",
    assets: "",
    current_loan: "",
    id_company: "",
    id_property: "",
    id_num_parley: "",
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
  const [isModalOpenTwo, setIsModalOpenTwo] = useState(false);
  const showModalTwo = () => {
    setIsModalOpenTwo(true);
  };
  const handleOkTwo = () => {
    setIsModalOpenTwo(false);
  };
  const handleCancelTwo = () => {
    setIsModalOpenTwo(false);
  };

  const [isModalOpenThree, setIsModalOpenThree] = useState(false);
  const showModalThree = () => {
    setIsModalOpenThree(true);
  };
  const handleOkThree = () => {
    setIsModalOpenThree(false);
  };
  const handleCancelThree = () => {
    setIsModalOpenThree(false);
  };
  const [isModalOpenFour, setIsModalOpenFour] = useState(false);
  const showModalFour = () => {
    setIsModalOpenFour(true);
  };
  const handleOkFour = () => {
    setIsModalOpenFour(false);
  };
  const handleCancelFour = () => {
    setIsModalOpenFour(false);
  };
  const [isModalOpenFive, setIsModalOpenFive] = useState(false);
  const showModalFive = () => {
    setIsModalOpenFive(true);
  };
  const handleOkFive = () => {
    setIsModalOpenFive(false);
  };
  const handleCancelFive = () => {
    setIsModalOpenFive(false);
  };
  return (
    <div className={cl.counterparties__content}>
      <h2>ФИО представителя:</h2>
      <input
        className={cl.counterparties__input}
        type="text"
        name="full_name_director"
        onChange={handleInput}
      />
      <h2>Компания клиента:</h2>
      <input
        className={cl.counterparties__input}
        type="text"
        name="client_company"
        onChange={handleInput}
      />
      <h2>ИНН:</h2>
      <input
        className={cl.counterparties__input}
        type="text"
        name="inn"
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
        name="address"
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
        name="mortgaged_property"
      />

      <h2>Средний доход в месяц:</h2>
      <input
        className={cl.counterparties__input}
        type="text"
        onChange={handleInput}
        name="average_salary"
      />
      <h2>Размер собственного вклада:</h2>
      <input
        className={cl.counterparties__input}
        type="text"
        onChange={handleInput}
        name="own_contribution"
      />
      <h2>Активы на момент анализа:</h2>
      <input
        className={cl.counterparties__input}
        type="text"
        onChange={handleInput}
        name="assets"
      />
      <h2>Текущие кредиты:</h2>
      <input
        className={cl.counterparties__input}
        type="text"
        onChange={handleInput}
        name="current_loan"
      />
      <h2>Id company:</h2>
      <div>
        <input
          className={cl.counterparties__input}
          type="text"
          value={companiesInfo && companiesInfo.company_name}
          disabled
        />
        <BsPlusLg className={cl.add__svg} onClick={showModalFour} />
      </div>
      <h2>Источник дохода:</h2>
      <div>
        <input
          className={cl.counterparties__input}
          type="text"
          name="souce_of_income"
          value={activitesInfo ? activitesInfo.activites_add : ""}

          disabled
        />
        <BsPlusLg className={cl.add__svg} onClick={showModalFive} />
      </div>
      <h2>Залогове имущество:</h2>
      <div>
        <input
          className={cl.counterparties__input}
          type="text"
          value={propertyInfo && propertyInfo.type}
          disabled
        />
        <BsPlusLg className={cl.add__svg} onClick={showModalTwo} />
      </div>
      <h2>Переговоры:</h2>
      <div>
        <div>
          <input
            className={cl.counterparties__input}
            type="text"
            value={conversationInfo && conversationInfo.name}
            disabled
          />
          <BsPlusLg className={cl.add__svg} onClick={showModalThree} />
        </div>
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div>
          <h2>Источник дохода:</h2>
          <input
            className={cl.counterparties__input}
            type="text"
            onChange={handleInput}
            name="souce_of_income"
          />
        </div>
      </Modal>
      <Modal
        open={isModalOpenTwo}
        onOk={handleOkTwo}
        onCancel={handleCancelTwo}
      >
        <MortgagedPropertyContent />
      </Modal>
      <Modal
        open={isModalOpenThree}
        onOk={handleOkThree}
        onCancel={handleCancelThree}
      >
        <ConversationsContent />
      </Modal>
      <Modal
        open={isModalOpenFour}
        onOk={handleOkFour}
        onCancel={handleCancelFour}
      >
        <CompaniesContent/>
      </Modal>
      <Modal
        open={isModalOpenFive}
        onOk={handleOkFive}
        onCancel={handleCancelFive}
      >
        <Activites/>
      </Modal>
    </div>
  );
};

export default Entities;
