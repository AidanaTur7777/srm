import { createSlice } from "@reduxjs/toolkit";
import { fetchProperties, getProperties } from "./propertyActions";

const initialState = {
  loading: false,
  error: null,
  success: false,
  propertyInfo: null,
  getLoading: false,
  getError: null,
  getSuccess: false,
  properties: null,
};

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProperties.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchProperties.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.propertyInfo = payload;
    },
    [fetchProperties.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getProperties.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getProperties.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.properties = payload;
    },
    [getProperties.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default propertiesSlice.reducer;
