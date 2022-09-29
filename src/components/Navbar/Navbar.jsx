import React, { useContext } from "react";
import { SidebarContext } from "../../context";
import cl from "./Navbar.module.scss";
import { MdOutlineMenu } from "react-icons/md"

const Navbar = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
  return (
    <div className={cl.navbar}>
      <h2 className={cl.navbar__left}>
        <MdOutlineMenu
          className={cl.navbar__burger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
        <span>Dashboard</span>
      </h2>
      <h2 className={cl.navbar__right}>Dashboard / Data KK / List</h2>
    </div>
  );
};

export default Navbar;
