import React, { useContext, useState, useEffect } from "react";
import { SidebarContext } from "../../context";
import cl from "./Navbar.module.scss";
import { MdOutlineMenu } from "react-icons/md";
import { useLocation } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUserDetails } from "../../features/user/userActions";
import { logout } from "../../features/user/userSlice";

const Navbar = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
  const location = useLocation();
  const [list, setList] = useState("Документы на КК");
  useEffect(() => {
    if (location.pathname === "/documents") {
      setList("Документы на КК");
    } else if (location.pathname === "/positions") {
      setList("Должности");
    } else if (location.pathname === "/companies") {
      setList("Компании");
    } else if (location.pathname === "/counterparties") {
      setList("Контрагенты");
    } else if (location.pathname === "/recipients") {
      setList("Поручители");
    } else if (location.pathname === "/conversations") {
      setList("Тел. переговоры");
    } else {
      setList("Документы на КК");
    }
  }, []);

  return (
    <div className={cl.navbar}>
      <h2 className={cl.navbar__left}>
        <MdOutlineMenu
          className={cl.navbar__burger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
        <span>Dashboard</span>
      </h2>
      <h2 className={cl.navbar__right}>Dashboard / {list}</h2>
      <span>
        <h2 className={cl.navbar__role}>User</h2>
      </span>
    </div>
  );
};

export default Navbar;
