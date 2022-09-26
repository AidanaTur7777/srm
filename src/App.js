import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "antd/dist/antd.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Documents from "./pages/Documents";
import Positions from "./pages/Positions";
import Property from "./pages/Property";
import Companies from "./pages/Companies";
import Item1 from "./pages/Item1";
import Item2 from "./pages/Item2";
import CreditSpecialist from "./pages/CreditSpecialist";
import Counterparties from "./pages/Counterparties";
import Recipients from "./pages/Recipients";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <div className="container">
            <Navbar />
            <Routes>
              <Route path="/documents" element={<Documents />} />
              <Route path="/positions" element={<Positions />} />
              <Route path="/property" element={<Property />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/option/item1" element={<Item1 />} />
              <Route path="/option/item2" element={<Item2 />} />
              <Route path="/credit-specialist" element={<CreditSpecialist />} />
              <Route path="/counterparties" element={<Counterparties />} />
              <Route path="/recipients" element={<Recipients />} />
              <Route path="/*" element={<Documents />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
