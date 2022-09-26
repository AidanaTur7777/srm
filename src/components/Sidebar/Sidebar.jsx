import React, { useState } from "react";
import cl from "./Sidebar.module.scss";
import { Menu } from "antd";
import { DownOutlined, CaretDownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
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
          <Menu className={cl.sidebar__menu__links}>
            <Menu.Item>
              <Link to="/documents">Документы на КК</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/positions">Должности</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/property">Залоговое имущество</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/companies">Компании</Link>
            </Menu.Item>
            <li
              className={cl.sidebar__menu__option}
              onClick={() => setOpen(!open)}
            >
              <span>Option</span>{" "}
              <CaretDownOutlined
                className={`${cl.sidebar__menu__icon} ${open && cl.open}`}
              />
            </li>
            {open && (
              <div className={cl.sidebar__menu__submenu}>
                <Menu.Item>
                  <Link to="/option/item1">First Item</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/option/item2">Second Item</Link>
                </Menu.Item>
              </div>
            )}
            <Menu.Item>
              <Link to="/counterparties">Контрагенты</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/credit-specialist">Кредит. спец</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/recipients">Поручители</Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
