import React from "react";
import "antd/dist/antd.min.css";
import { BrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "./routes/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <PrivateRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
