import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/Button/Button";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import cl from "../../pages/Counterparties/counterparties.module.scss";
import { fetchCounterparties } from "../../features/counterparties/counterpartiesSlice";
import { Modal } from "antd";
import Recipients from "../../pages/Recipients/Recipients";
import { BsPlusLg } from "react-icons/bs";
import { getUserDetail } from "../../features/user/userActions";
import MortgagedPropertyContent from "../../pages/MortgagedProperty/MortgagedPropertyContent";
import ConversationsContent from "../../pages/Conversations/ConversationsContent";

const Individuals = () => {
  const dispatch = useDispatch();
  const [idCreditSpec, setIdCreditSpec] = useState("");
  const { userInfo } = useSelector((state) => state.counterparties);
  const { recipientInfo } = useSelector((state) => state.recipients);
  const { propertyInfo } = useSelector((state) => state.property);
  const { conversationInfo } = useSelector((state) => state.conversations);
  const [guarantor, setGuarantor] = useState(
    recipientInfo ? recipientInfo.id : ""
  );
  const [property, setProperty] = useState(propertyInfo ? propertyInfo.id : "");
  const [conversation, setConversation] = useState(
    conversationInfo ? conversationInfo.id : ""
  );
  const [state, setState] = useState({
    id_credit_spec: "",
    full_name: "",
    credit_type: "",
    status: "",
    credit_sum: "",
    marital_status: "",
    credit_history: null,
    phone: "",
    address: "",
    client_actual_address: "",
    guarantor: "",
    income_statement: null,
    mortgaged_property: "",
    contracts: null,
    report: null,
    monitoring_report: null,
    id_guarantor: guarantor,
    id_property: property,
    meet_conversation: conversation,
  });
  useEffect(() => {
    setGuarantor(recipientInfo && recipientInfo.id);
    setProperty(propertyInfo && propertyInfo.id);
    setConversation(conversationInfo && conversationInfo.id);
  }, [recipientInfo, propertyInfo, conversationInfo]);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userToken"));
    dispatch(getUserDetail(token.access));
  }, [dispatch]);
  const handleSubmit = () => {
    dispatch(fetchCounterparties(state));
    console.log(state);
    setIdCreditSpec(userInfo && userInfo.id_credit_spec);
    console.log(idCreditSpec);
  };
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
  return (
    <div className={cl.counterparties__content}>
      {/* <h2>Id credit spec:</h2>
      <input
        className={cl.counterparties__input}
        type="text"
        name="id_credit_spec"
        value={idCreditSpec && idCreditSpec}
        disabled
        onChange={handleInput}
      /> */}
      <h2>ФИО представителя:</h2>
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
      <h2>Семейное положение:</h2>
      <Select
        className={cl.counterparties__accor}
        onChange={(e) => setState({ ...state, marital_status: e })}
      >
        <Select.Option value="married">Женат/Замужем</Select.Option>
        <Select.Option value="divorced">Разведен</Select.Option>
        <Select.Option value="widow/widower">Вдова/Вдовец</Select.Option>
        <Select.Option value="single">Холост/Незамужем</Select.Option>
      </Select>
      <h2>Кредитная история:</h2>
      <input
        type="file"
        onChange={(e) =>
          setState({
            ...state,
            credit_history: state.credit_history=(new FormData()).append("file", e.target.value),
          })
        }
      />
      <h2>Номер телефона:</h2>
      <input
        className={cl.counterparties__input}
        type="text"
        onChange={handleInput}
        name="phone"
      />
      <h2>Адрес прописки:</h2>
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
      <h2>Поручитель:</h2>
      <input
        className={cl.counterparties__input}
        type="text"
        onChange={handleInput}
        name="guarantor"
      />
      <h2>Справка о доходах:</h2>
      <input
        type="file"
        onChange={(e) =>
          setState({
            ...state,
            income_statement: state.income_statement=(new FormData()).append(
              "file",
              e.target.value
            ),
          })
        }
      />
      <h2>Залоговое имущество:</h2>
      <input
        className={cl.counterparties__input}
        type="text"
        onChange={handleInput}
        name="mortgaged_property"
      />
      <h2>Договора с подрядчиками и поставщиками:</h2>
      <input
        type="file"
        onChange={(e) =>
          setState({
            ...state,
            contracts: state.contracts=(new FormData()).append("file", e.target.value),
          })
        }
      />
      <h2>Отчёт подрядчиков и поставщиков об оказанной услуге:</h2>
      <input
        type="file"
        onChange={(e) =>
          setState({
            ...state,
            report: state.report=(new FormData()).append("file", e.target.value),
          })
        }
      />
      <h2>Отчёт по мониторингу:</h2>
      <input
        type="file"
        onChange={(e) =>
          setState({
            ...state,
            monitoring_report: state.monitoring_report=(new FormData()).append(
              "file",
              e.target.value
            ),
          })
        }
      />
      <h2>Поручитель:</h2>
      <div>
        <input
          className={cl.counterparties__input}
          type="text"
          value={recipientInfo ? recipientInfo.full_name : ""}
          name="guarantor"
          disabled
        />
        <BsPlusLg className={cl.add__svg} onClick={showModal} />
      </div>
      <h2>Залогове имущество:</h2>
      <div>
        <input
          className={cl.counterparties__input}
          type="text"
          name="guarantor"
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
            name="guarantor"
            value={conversationInfo && conversationInfo.name}
            disabled
          />
          <BsPlusLg className={cl.add__svg} onClick={showModalThree} />
        </div>
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Recipients />
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
    </div>
  );
};

export default Individuals;
