import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterpartiesSlice from '../features/counterparties/counterpartiesSlice'
import userReducer from '../features/user/userSlice'
import recipients from '../features/recipients/recipients'

const store = configureStore({
  reducer: {
    user: userReducer,
    counterparties: counterpartiesSlice,
    recipients: recipients
  },
})

export default store
