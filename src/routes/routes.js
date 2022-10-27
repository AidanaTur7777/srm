import Companies from "../pages/Companies/Companies";
import Counterparties from "../pages/Counterparties/Counterparties";
import Documents from "../pages/Documents/Documents";
import Positions from "../pages/Positions/Positions";
import Recipients from "../pages/Recipients/Recipients";
import Conversations from "../pages/Conversations/Conversations";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import RegistrationSpec from "../pages/RegistrationSpec/RegistrationSpec";
import Registration from "../pages/RegistrationClient/RegistrationClient";
import RegistrationChoice from "../pages/RegistrationChoice/RegistrationChoice";
import RecipientsContainer from "../pages/Recipients/RecipientsContainer";
import MortgagedProperty from "../pages/MortgagedProperty/MortgagedProperty";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/documents" element={<Documents />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/counterparties" element={<Counterparties />} />
      <Route path="/recipients" element={<RecipientsContainer/>} />
      <Route path="/conversations" element={<Conversations />} />
      <Route path="/mortgaged-property" element={<MortgagedProperty/>} />
      <Route path="/*" element={<Documents />} />
    </Routes>
  );
};

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registrationSpec" element={<RegistrationSpec />} />
      <Route path="registrationClient" element={<Registration />} />
      <Route path="registrationChoice" element={<RegistrationChoice/>} />
      <Route path="/*" element={<Login />} />
    </Routes>
  );
};
