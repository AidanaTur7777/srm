import React, { useState } from "react";
import "antd/dist/antd.min.css";
import { BrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "./routes/routes";
import { SidebarContext } from "./context";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <BrowserRouter>
        <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
          <PrivateRoutes/>
        </SidebarContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
