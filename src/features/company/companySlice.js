import { createSlice } from "@reduxjs/toolkit";
import { deleteCompany, fetchCompany, getCompanies } from "./companyActions";

const initialState = {
  loading: false,
  error: null,
  success: false,
  company: null,
  getLoading: false,
  getError: null,
  getSuccess: false,
  companies: null,
  deleteLoading: false,
  deleteError: null,
  deleteSuccess: false,
  deletedInfo: null,
};
const companiesSlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCompany.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [fetchCompany.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.company = payload;
      state.success = true;
    },
    [fetchCompany.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getCompanies.pending]: (state) => {
      state.getLoading = true;
      state.getError = null;
    },
    [getCompanies.fulfilled]: (state, { payload }) => {
      state.getLoading = false;
      state.companies = payload;
    },
    [getCompanies.rejected]: (state, { payload }) => {
      state.getLoading = false;
      state.getError = payload;
    },
    [deleteCompany.pending]: (state) => {
      state.deleteLoading = true;
    },
    [deleteCompany.fulfilled]: (state, { payload }) => {
      state.deleteLoading = false;
      state.deletedInfo = payload;
    },
    [deleteCompany.rejected]: (state, { payload }) => {
      state.deleteLoading = false;
      state.deleteError = payload;
    },
  },
});
export default companiesSlice.reducer;
