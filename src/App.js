import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "antd/dist/antd.min.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "./routes/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <div className="container">
            <Navbar />
            <PrivateRoutes />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
