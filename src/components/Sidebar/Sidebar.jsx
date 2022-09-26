import React, { useState } from "react";
import cl from "./Sidebar.module.scss";
import { CaretDownOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={cl.sidebar}>
        <div className={cl.sidebar__dashboard}>
          <h1>Dashboard</h1>
        </div>
        <div className={cl.sidebar__menu}>
          <h2 className={cl.sidebar__menu__title}>MY STORE</h2>
          <ul className={cl.sidebar__menu__links}>
            <li>
              <NavLink
                exact
                to="/documents"
                className={({ isActive }) => (isActive ? cl.active : "")}
              >
                <span>Документы на КК</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                exact
                to="/positions"
                className={({ isActive }) => (isActive ? cl.active : "")}
              >
                <span>Должности</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/property"
                className={({ isActive }) => (isActive ? cl.active : "")}
              >
                <span>Залоговое имущество</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                exact
                to="/companies"
                className={({ isActive }) => (isActive ? cl.active : "")}
              >
                <span>Компании</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/counterparties"
                className={({ isActive }) => (isActive ? cl.active : "")}
              >
                <span>Контрагенты</span>
              </NavLink>
            </li>
            <li onClick={() => setOpen(!open)}>
              <span>Option</span>
              <CaretDownOutlined
                className={`${cl.sidebar__menu__icon} ${open && cl.open}`}
              />
            </li>
            {open && (
              <div className={cl.sidebar__menu__submenu}>
                <li>
                  <NavLink
                    exact
                    to="/option/item1"
                    className={({ isActive }) => (isActive ? cl.active : "")}
                  >
                    <span>Item1</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/option/item2"
                    className={({ isActive }) => (isActive ? cl.active : "")}
                  >
                    <span>Item2</span>
                  </NavLink>
                </li>
              </div>
            )}
            <li>
              <NavLink
                exact
                to="/credit-specialist"
                className={({ isActive }) => (isActive ? cl.active : "")}
              >
                <span>Кредит. спец</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                exact
                to="/recipients"
                className={({ isActive }) => (isActive ? cl.active : "")}
              >
                <span>Поручители</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
