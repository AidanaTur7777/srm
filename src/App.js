import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "antd/dist/antd.min.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "./routes/routes";
import { SidebarContext } from "./context";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <BrowserRouter>
        <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
          <div className={`${"App"} ${"open"}`}>
            <Sidebar />
            <div className="container">
              <Navbar />
              <div
                className={`${"backdrop"} ${sidebarOpen && "backdrop__open"}`}
                onClick={() => setSidebarOpen(false)}
              ></div>

              <PrivateRoutes />
            </div>
          </div>
        </SidebarContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
