import React from "react";
import cl from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={cl.navbar}>
      <h2 className={cl.navbar__left}>Dashboard</h2>
      <h2 className={cl.navbar__right}>Dashboard / Data KK / List</h2>
    </div>
  );
};

export default Navbar;
