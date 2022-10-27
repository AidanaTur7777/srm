import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import companiesReducer from '../features/company/companySlise'

const store = configureStore({
  reducer: {
    user: userReducer,
    companies: companiesReducer,
  },
})

export default store
