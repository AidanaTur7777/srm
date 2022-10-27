import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import { fetchDocuments } from "../../features/documents/documentsSlice";
import Layout from "../../Layout/Layout";
import cl from "./documents.module.scss";
import { BsPlusLg } from "react-icons/bs";

const Documents = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDocuments());
  }, [dispatch]);
  const handleSubmit = () => {
    dispatch(fetchDocuments(state));
    console.log(state);
  };
  const [state, setState] = useState({
    credit_spec_report: new FormData(),
    committee_decision: new FormData(),
    all_contracts: new FormData(),
    scoring: "",
    id_client: "",
    id_entity: "",
  });
  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
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
                credit_spec_report: state.credit_spec_report.append(
                  "file",
                  e.target.value
                ),
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
                committee_decision: state.committee_decision.append(
                  "file",
                  e.target.value
                ),
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
                all_contracts: state.all_contracts.append(
                  "file",
                  e.target.value
                ),
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
          <h2 className={cl.documents__title}>Юридическое лицо:</h2>
          <div className={cl.documents__select__container}>
            <Select className={cl.documents__select}>
              <Select.Option value="demo">Выбрать</Select.Option>
              <Select.Option value="demo-2">Выбор 2</Select.Option>
              <Select.Option value="demo-3">Выбор 3</Select.Option>
            </Select>
            <BsPlusLg className={cl.add__svg} />
          </div>
        </div>
        <div className={cl.documents__category}>
          <h2 className={cl.documents__title}>Физическое лицо:</h2>
          <div className={cl.documents__select__container}>
            <Select className={cl.documents__select}>
              <Select.Option value="demo">Выбрать</Select.Option>
              <Select.Option value="demo-2">Выбор 2</Select.Option>
              <Select.Option value="demo-3">Выбор 3</Select.Option>
            </Select>
            <BsPlusLg className={cl.add__svg} />
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
      </div>
    </Layout>
  );
};

export default Documents;
