import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterpartiesSlice from "../features/counterparties/counterpartiesSlice";
import userReducer from "../features/user/userSlice";
import recipients from "../features/recipients/recipients";
import propertySlice from "../features/property/propertySlice";
import conversationsSlice from "../features/conversations/conversationsSlice";
import entitySlice from "../features/entity/entitySlice";
import activitSlice from "../features/documents/activitSlice";
import companySlise from "../features/company/companySlise";
const store = configureStore({
  reducer: {
    user: userReducer,
    counterparties: counterpartiesSlice,
    recipients: recipients,
    property: propertySlice,
    conversations: conversationsSlice,
    entity: entitySlice,
    activites: activitSlice,
    companies: companySlise
  },
});

export default store;
