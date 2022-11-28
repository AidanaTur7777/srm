import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../../components/Table/Table";
import cl from "../../Documents/DocumentsList/documentsList.module.scss";
import { useNavigate } from "react-router";
import {
  deleteEntity,
  getEntities,
} from "../../../features/entity/entityActions";
import { BiSearch } from "react-icons/bi";

const EntitiesList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEntities());
  }, [dispatch]);
  const { entities } = useSelector((state) => state.entity);
  const [entitiesList, setEntitiesList] = useState(entities && entities);
  useEffect(() => {
    setEntitiesList(entities);
  }, [entities]);
  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempEntities = entitiesList.map((entity) => {
        return { ...entity, isChecked: checked };
      });
      setEntitiesList(tempEntities);
    } else {
      let tempEntities = entitiesList.map((entity) =>
        entity.id == name ? { ...entity, isChecked: checked } : entity
      );
      setEntitiesList(tempEntities);
    }
  };
  const deleteDoc = () => {
    entitiesList.map((doc) => {
      if (doc?.isChecked) {
        dispatch(deleteEntity({ id: doc.id })).then(() =>
          dispatch(getEntities())
        );
      }
    });
  };
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className={cl.container}>
      <div className={cl.container__header}>
        <h2>Список Юридических лиц</h2>
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
          {entitiesList && (
            <Table>
              <tr className="header__tr">
                <th>
                  <input
                    type="checkbox"
                    name="allSelect"
                    checked={
                      !entitiesList.some((entity) => entity?.isChecked !== true)
                    }
                    onChange={handleChange}
                  />
                </th>
                <th>ID</th>
                <th>ФИО представителя</th>
                <th>Компания клиента</th>
              </tr>
              {entitiesList
                .filter((item) =>
                  item.full_name_director.toLowerCase().includes(searchValue)
                )
                .map((entity) => (
                  <tr key={entity.id} className="body__tr">
                    <td>
                      <input
                        type="checkbox"
                        name={entity.id}
                        checked={entity?.isChecked || false}
                        onChange={handleChange}
                      />
                    </td>
                    <td className="main_field">{entity.id}</td>
                    <td>{entity.full_name_director}</td>
                    <td>{entity.client_company}</td>
                  </tr>
                ))}
            </Table>
          )}
        </div>
      </div>
    </div>
  );
};

export default EntitiesList;
