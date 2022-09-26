import Companies from "../pages/Companies";
import Counterparties from "../pages/Counterparties";
import CreditSpecialist from "../pages/CreditSpecialist";
import Documents from "../pages/Documents";
import Item1 from "../pages/Item1";
import Item2 from "../pages/Item2";
import Positions from "../pages/Positions";
import Property from "../pages/Property";
import Recipients from "../pages/Recipients";
import { Routes, Route } from "react-router-dom";


export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/documents" element={<Documents/>} />
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
  );
};

export const PublicRoutes=()=>{
    return(
        <></>
    )
}
