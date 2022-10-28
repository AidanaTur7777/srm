import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import { fetchDocuments } from "../../features/documents/documentsSlice";
import Layout from "../../Layout/Layout";
import cl from "./documents.module.scss";
import { BsPlusLg } from "react-icons/bs";
import { Modal } from "antd";
import Individuals from "../../components/Individuals/Individuals";
import Entities from "../../components/Entities/Entities";
import { getUserDetail } from "../../features/user/userActions";

const Documents = () => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(fetchDocuments(state));
    console.log(state);
  };
  const [state, setState] = useState({
    credit_spec_report: null,
    committee_decision: null,
    all_contracts: null,
    scoring: "",
    id_client: "",
    id_entity: "",
  });
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userToken"));
    dispatch(getUserDetail(token.access));
  }, [dispatch]);
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
  const { userInfo }=useSelector(state=>state.counterparties)
  const { entityUserInfo }=useSelector(state=>state.entity)
  console.log(entityUserInfo);
  return (
    <Layout>
      <div className={cl.documents}>
        <div className={cl.documents__category}>
          <h2 className={cl.documents__title}>
            Заключение кредитного эксперта (скан)
          </h2>
          <input
            type="file"
            onChange={(e) =>
              setState({
                ...state,
                credit_spec_report: e.target.value,
              })
            }
          />
        </div>
        <div className={cl.documents__category}>
          <h2 className={cl.documents__title}>Решение КК (скан)</h2>
          <input
            type="file"
            onChange={(e) =>
              setState({
                ...state,
                committee_decision: e.target.value,
              })
            }
          />
        </div>
        <div className={cl.documents__category}>
          <h2 className={cl.documents__title}>
            Все заключенные договора, перечень и сканы:
          </h2>
          <input
            type="file"
            onChange={(e) =>
              setState({
                ...state,
                all_contracts: e.target.value,
              })
            }
          />
        </div>
        <div className={cl.documents__category}>
          <h2 className={cl.documents__title}>Скоринг:</h2>
          <input
            className={cl.documents__input}
            onChange={handleInput}
            name="scoring"
          />
        </div>
        {/* <div className={cl.documents__category}>
          <h2 className={cl.documents__title}>Юридическое лицо:</h2>
          <input
            className={`${cl.documents__input} ${cl.documents__input__short}`}
            name="id_client"
            onChange={handleInput}
          />
        </div>
        <div className={cl.documents__category}>
          <h2 className={cl.documents__title}>Физическое лицо:</h2>
          <input
            className={`${cl.documents__input} ${cl.documents__input__short}`}
            name="id_entity"
            onChange={handleInput}
          />
        </div>
        <div className={cl.documents__category}>
          <h2 className={cl.documents__title}>Кредитный спец:</h2>
          <input
            className={`${cl.documents__input} ${cl.documents__input__short}`}
          />
        </div> */}
        <div className={cl.documents__category}>
          <h2 className={cl.documents__title}>Физическое лицо:</h2>
          <div className={cl.documents__select__container}>
            <input
              className={cl.documents__input}
              onChange={handleInput}
              name="scoring"
              value={userInfo && userInfo.full_name}
              disabled
            />
            <BsPlusLg className={cl.add__svg} onClick={showModal} />
          </div>
        </div>
        <div className={cl.documents__category}>
          <h2 className={cl.documents__title}>Юридическое лицо:</h2>
          <div className={cl.documents__select__container}>
            <input
              className={cl.documents__input}
              onChange={handleInput}
              disabled
              name="scoring"
              value={entityUserInfo ? entityUserInfo.full_name_director:""}
            />
            <BsPlusLg className={cl.add__svg} onClick={showModalTwo} />
          </div>
        </div>
        <div className={cl.documents__category}>
          <h2 className={cl.documents__title}>Кредитный спец:</h2>
          <div className={cl.documents__select__container}>
            <Select className={cl.documents__select}>
              <Select.Option value="demo">Выбрать</Select.Option>
              <Select.Option value="demo-2">Выбор 2</Select.Option>
              <Select.Option value="demo-3">Выбор 3</Select.Option>
            </Select>
            <BsPlusLg className={cl.add__svg} />
          </div>
        </div>

        <Button onClick={handleSubmit}>Submit</Button>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Individuals />
        </Modal>
        <Modal
          open={isModalOpenTwo}
          onOk={handleOkTwo}
          onCancel={handleCancelTwo}
        >
          <Entities />
        </Modal>
      </div>
    </Layout>
  );
};

export default Documents;
