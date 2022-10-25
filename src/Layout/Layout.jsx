import React, { useContext } from "react";
import { SidebarContext } from "../context";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import { motion } from "framer-motion";

function Layout({ children }) {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
  return (
    <div className={`${"App"} ${"open"}`}>
      <motion.div
        initial={{ x: "-50px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
      >
        <Sidebar />
      </motion.div>
      <div className="container">
        <Navbar />
        <div
          className={`${"backdrop"} ${sidebarOpen && "backdrop__open"}`}
          onClick={() => setSidebarOpen(false)}
        ></div>
        <main role="main">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
