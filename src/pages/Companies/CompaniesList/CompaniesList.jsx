import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../../components/Table/Table";
import { useNavigate } from "react-router";
import Layout from "../../../Layout/Layout";
import cl from "../../Documents/DocumentsList/documentsList.module.scss";
import {
  deleteCompany,
  getCompanies,
} from "../../../features/company/companyActions";
import { BiSearch } from "react-icons/bi";

const CompaniesList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);
  const { companies } = useSelector((state) => state.companies);
  const [companiesList, setCompaniesList] = useState(companies && companies);
  useEffect(() => {
    setCompaniesList(companies);
  }, [companies, dispatch]);
  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempCompanies = companiesList.map((company) => {
        return { ...company, isChecked: checked };
      });
      setCompaniesList(tempCompanies);
    } else {
      let tempCompanies = companiesList.map((company) =>
        company.company_name == name
          ? { ...company, isChecked: checked }
          : company
      );
      setCompaniesList(tempCompanies);
    }
  };
  const deleteDoc = () => {
    companiesList.map((doc) => {
      if (doc?.isChecked) {
        dispatch(deleteCompany({ id: doc.id })).then(() =>
          dispatch(getCompanies())
        );
      }
    });
  };
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <Layout>
        <div className={cl.container}>
          <div className={cl.container__header}>
            <h2>Список Компаний</h2>
            <button onClick={() => navigate("/companies/add")}>Добавить</button>
          </div>
          <div className={cl.content}>
            <div className={cl.content__search}>
              <input
                type="text"
                onChange={(e) => {
                  setSearchValue(e.target.value.toLowerCase());
                }}
                placeholder="Пойск"
              />
              <BiSearch />
            </div>
            <div className={cl.content__deleteDiv}>
              <button className={cl.content__delete} onClick={deleteDoc}>
                Удалить
              </button>
            </div>
            <div className={cl.content__list}>
              {companiesList && (
                <Table>
                  <tr className="header__tr">
                    <th>
                      <input
                        type="checkbox"
                        name="allSelect"
                        checked={
                          !companiesList.some(
                            (company) => company?.isChecked !== true
                          )
                        }
                        onChange={handleChange}
                      />
                    </th>
                    <th>ID</th>
                    <th>Наименование компании</th>
                    <th>Юридическии адрес</th>
                  </tr>
                  {companiesList
                    .filter((item) =>
                      item.company_name.toLowerCase().includes(searchValue)
                    )
                    .map((company) => (
                      <tr key={company.id} className="body__tr">
                        <td>
                          <input
                            type="checkbox"
                            name={company.company_name}
                            checked={company?.isChecked || false}
                            onChange={handleChange}
                          />
                        </td>
                        <td className="main_field">{company.id}</td>
                        <td>{company.company_name}</td>
                        <td>{company.legal_address}</td>
                      </tr>
                    ))}
                </Table>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default CompaniesList;
