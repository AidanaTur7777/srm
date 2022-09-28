import Companies from "../pages/Companies/Companies";
import Counterparties from "../pages/Counterparties/Counterparties";
import Documents from "../pages/Documents/Documents";
import Positions from "../pages/Positions/Positions";
import Recipients from "../pages/Recipients/Recipients";
import Conversations from "../pages/Conversations/Conversations"
import { Routes, Route } from "react-router-dom";


export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/documents" element={<Documents/>} />
      <Route path="/positions" element={<Positions />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/counterparties" element={<Counterparties />} />
      <Route path="/recipients" element={<Recipients />} />
      <Route path="/conversations" element={<Conversations/>} />
      <Route path="/*" element={<Documents />} />
    </Routes>
  );
};

export const PublicRoutes=()=>{
    return(
        <></>
    )
}
