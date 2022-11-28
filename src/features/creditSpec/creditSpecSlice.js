import { createSlice } from "@reduxjs/toolkit";
import { getCreditSpec } from "./creditSpecActions";

const initialState = {
  loading: false,
  error: null,
  success: false,
  creditSpecs: null,
};

const creditSpecsSlice = createSlice({
  name: "creditSpecSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getCreditSpec.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getCreditSpec.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.creditSpecs = payload;
    },
    [getCreditSpec.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export default creditSpecsSlice.reducer;