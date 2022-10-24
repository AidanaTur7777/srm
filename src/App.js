import React, { useEffect, useState } from "react";
import "antd/dist/antd.min.css";
import { BrowserRouter } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./routes/routes";
import { SidebarContext } from "./context";
import { useSelector } from "react-redux";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.user);
  return (
    <>
      <BrowserRouter>
        <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
          {localStorage.getItem("userToken")!=undefined ? <PrivateRoutes /> : <PublicRoutes />}
        </SidebarContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
