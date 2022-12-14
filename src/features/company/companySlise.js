import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCompany = createAsyncThunk(
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
                `https://baitushumdemo.herokuapp.com/crm/api/company/`,
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
    success: false,
}

const companiesSlise = createSlice({
    name: 'company',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCompany.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [fetchCompany.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
            state.userToken = payload.userToken
        },
        [fetchCompany.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    },
})
export const { setRecipientInformation } = companiesSlise.actions;

export default companiesSlise.reducer