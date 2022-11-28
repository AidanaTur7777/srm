import CounterpartiesAdd from "../pages/Counterparties/CounterpartiesAdd/CounterpartiesAdd";
import RecipientsAdd from "../pages/Recipients/RecipientsAdd/RecipientsAdd";
import ConversationsAdd from "../pages/Conversations/ConversationsAdd/ConversationsAdd";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import RegistrationSpec from "../pages/RegistrationSpec/RegistrationSpec";
import Registration from "../pages/RegistrationClient/RegistrationClient";
import RegistrationChoice from "../pages/RegistrationChoice/RegistrationChoice";
import DocumentAdd from "../pages/Documents/DocumentAdd/DocumentAdd";
import DocumentsList from "../pages/Documents/DocumentsList/DocumentsList";
import CompaniesAdd from "../pages/Companies/CompaniesAdd/CompaniesAdd";
import PropertyAdd from "../pages/Property/PropertyAdd/PropertyAdd";
import CompaniesList from "../pages/Companies/CompaniesList/CompaniesList";
import RecipientsList from "../pages/Recipients/RecipientsList/RecipientsList";
import ConversationsList from "../pages/Conversations/ConversationsList/ConversationsList";
import PropertyList from "../pages/Property/PropertyList/PropertyList";
import CounterpartiesList from "../pages/Counterparties/CounterpartiesList/CounterpartiesList";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/documents/add" element={<DocumentAdd />} />
      <Route path="/documents" element={<DocumentsList />} />
      <Route path="/companies/add" element={<CompaniesAdd />} />
      <Route path="/companies" element={<CompaniesList />} />
      <Route path="/recipients/add" element={<RecipientsAdd />} />
      <Route path="/recipients" element={<RecipientsList />} />
      <Route path="/conversations/add" element={<ConversationsAdd />} />
      <Route path="/conversations" element={<ConversationsList />} />
      <Route path="/properties/add" element={<PropertyAdd />} />
      <Route path="/properties" element={<PropertyList />} />
      <Route path="*" element={<DocumentAdd />} />
      <Route path="/counterparties/add" element={<CounterpartiesAdd />} />
      <Route path="/counterparties" element={<CounterpartiesList/>} />
    </Routes>
  );
};

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registrationSpec" element={<RegistrationSpec />} />
      <Route path="registrationClient" element={<Registration />} />
      <Route path="registrationChoice" element={<RegistrationChoice />} />
      <Route path="/*" element={<Login />} />
    </Routes>
  );
};
