import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const companyForm = createAsyncThunk(
    'company',
    async ({ id, company_name, inn, legal_address, actual_address, telephone,
        okpo, register_number, field_activity },
        { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            const { data } = await axios.post(
                `https://baitushumdemo.herokuapp.com/auth/jwt/create/`,
                {
                    id, company_name, inn, legal_address, actual_address, telephone,
                    okpo, register_number, field_activity
                },
                config
            )
            return data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

const initialState = {
    loading: false,
    error: null,
}

const userSlice = createSlice({
    name: 'company',
    initialState,
    reducers: {},
    extraReducers: {
        [companyForm.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [companyForm.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
            state.userToken = payload.userToken
        },
        [companyForm.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    },
})

export const { logout } = userSlice.actions

export default companyForm.reducer
