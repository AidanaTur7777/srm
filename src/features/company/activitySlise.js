import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import $api from '../../app/utils/axios'

export const activitesGetAdapter = createEntityAdapter();
export const activitesGetSelectors = activitesGetAdapter.getSelectors(
    (state) => state.activitesGet
);

export const fetchActivites = createAsyncThunk(
    'activites',
    async ({ activites_add }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            const { data } = await axios.post(
                `https://baitushumdemo.herokuapp.com/crm/api/activity/`,
                { activites_add },
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
export const fetchActivitesGet = createAsyncThunk(
    'product/fetchproducts',
    async () => {
        const { data } = await $api.get(
            `/crm/api/activity/`
        );
        return data;
    }
);

const initialState = {
    loading: false,
    error: null,
    success: false,
    activitesInfo: "",
    activitesGet:null
}

const activitesSlise = createSlice({
    name: 'activites',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchActivites.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [fetchActivites.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.activitesInfo = payload
        },
        [fetchActivites.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [fetchActivitesGet.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [fetchActivitesGet.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;

        },
        [fetchActivitesGet.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.activitesGet = action.payload;
        },
    },
})
export default activitesSlise.reducer