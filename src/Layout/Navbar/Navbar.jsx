import React, { useContext, useState, useEffect } from "react";
import { SidebarContext } from "../../context";
import cl from "./Navbar.module.scss";
import { MdOutlineMenu } from "react-icons/md";
import { useLocation } from "react-router";

const Navbar = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
  const location = useLocation();
  const [list, setList] = useState("Документы на КК");
  useEffect(() => {
    if (location.pathname === "/documents" || location.pathname === "/documents/add") {
      setList("Документы на КК");
    } else if (location.pathname === "/positions" || location.pathname === "/documents/add") {
      setList("Должности");
    } else if (location.pathname === "/companies" || location.pathname === "/companies/add") {
      setList("Компании");
    } else if (location.pathname === "/counterparties" || location.pathname === "/counterparties/add") {
      setList("ЧП/ИП");
    } else if (location.pathname === "/recipients" || location.pathname === "/recipients/add") {
      setList("Поручители");
    } else if (location.pathname === "/conversations" || location.pathname === "/conversations/add") {
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
      </h2>
      <h2 className={cl.navbar__right}>{list}</h2>
      <span>
        <h2 className={cl.navbar__role}>User</h2>
      </span>
    </div>
  );
};

export default Navbar;
