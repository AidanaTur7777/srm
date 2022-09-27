import React, { useState } from "react";
import cl from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
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
            <li>
              <NavLink
                exact
                to="/recipients"
                className={({ isActive }) => (isActive ? cl.active : "")}
              >
                <span>Поручители</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/conversations"
                className={({ isActive }) => (isActive ? cl.active : "")}
              >
                <span>Тел. переговоры</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
