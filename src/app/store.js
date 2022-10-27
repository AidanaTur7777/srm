import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterpartiesSlice from '../features/counterparties/counterpartiesSlice'
import userReducer from '../features/user/userSlice'
import recipients from '../features/recipients/recipients'
import activitesReducer from '../features/company/activitySlise'

const store = configureStore({
  reducer: {
    user: userReducer,
    counterparties: counterpartiesSlice,
    recipients: recipients,
    activites: activitesReducer
  },
})

export default store
