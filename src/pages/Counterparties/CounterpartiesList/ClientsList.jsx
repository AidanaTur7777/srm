import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../../components/Table/Table";
import cl from "../../Documents/DocumentsList/documentsList.module.scss";
import { useNavigate } from "react-router";
import {
  deleteClient,
  getClients,
} from "../../../features/clients/clientsActions";
import { BiSearch } from "react-icons/bi";
const ClientsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);
  const { clients } = useSelector((state) => state.counterparties);
  const [clientsList, setClientsList] = useState(clients && clients);
  useEffect(() => {
    setClientsList(clients);
  }, [clients]);
  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempClients = clientsList.map((client) => {
        return { ...client, isChecked: checked };
      });
      setClientsList(tempClients);
    } else {
      let tempClients = clientsList.map((client) =>
        client.id == name ? { ...client, isChecked: checked } : client
      );
      setClientsList(tempClients);
    }
  };
  const deleteDoc = () => {
    clientsList.map((doc) => {
      if (doc?.isChecked) {
        dispatch(deleteClient({ id: doc.id })).then(() =>
          dispatch(getClients())
        );
      }
    });
  };
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className={cl.container}>
      <div className={cl.container__header}>
        <h2>Список Физических лиц</h2>
        <button onClick={() => navigate("/counterparties/add")}>
          Добавить
        </button>
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
          {clientsList && (
            <Table>
              <tr className="header__tr">
                <th>
                  <input
                    type="checkbox"
                    name="allSelect"
                    checked={
                      !clientsList.some((client) => client?.isChecked !== true)
                    }
                    onChange={handleChange}
                  />
                </th>
                <th>ID</th>
                <th>ФИО клиента</th>
                <th>Тип кредита</th>
              </tr>
              {clientsList
                .filter((item) =>
                  item.full_name.toLowerCase().includes(searchValue)
                )
                .map((client) => (
                  <tr key={client.id} className="body__tr">
                    <td>
                      <input
                        type="checkbox"
                        name={client.id}
                        checked={client?.isChecked || false}
                        onChange={handleChange}
                      />
                    </td>
                    <td className="main_field">{client.id}</td>
                    <td>{client.full_name}</td>
                    {client.credit_type == "CR" ? (
                      <td>Кредит</td>
                    ) : (
                      <td>Лизинг</td>
                    )}
                    <td>{document.created_date}</td>
                  </tr>
                ))}
            </Table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientsList;
