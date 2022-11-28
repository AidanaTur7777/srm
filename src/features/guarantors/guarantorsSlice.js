import { createSlice } from "@reduxjs/toolkit";
import {
  deleteGuarantor,
  fetchGuarantors,
  getGuarantors,
} from "./guarantorsActions";

const initialState = {
  loading: false,
  error: null,
  success: false,
  guarantorInfo: null,
  getLoading: false,
  getError: null,
  getSuccess: false,
  guarantors: null,
  deleteLoading: false,
  deleteError: null,
  deleteSuccess: false,
  guarantorDel: null,
};

const guarantorsSlice = createSlice({
  name: "guarantors",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGuarantors.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchGuarantors.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.guarantorInfo = payload;
      state.success= true;
    },
    [fetchGuarantors.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getGuarantors.pending]: (state) => {
      state.getLoading = true;
      state.getError = null;
    },
    [getGuarantors.fulfilled]: (state, { payload }) => {
      state.getLoading = false;
      state.guarantors = payload;
    },
    [getGuarantors.rejected]: (state, { payload }) => {
      state.getLoading = false;
      state.getError = payload;
    },
    [deleteGuarantor.pending]: (state) => {
      state.deleteLoading = true;
      state.deleteError = null;
    },
    [deleteGuarantor.fulfilled]: (state, { payload }) => {
      state.deleteLoading = false;
      state.guarantorDel = payload;
    },
    [deleteGuarantor.rejected]: (state, { payload }) => {
      state.deleteLoading = false;
      state.deleteError = payload;
    },
  },
});

export const { setGuarantorsInformation } = guarantorsSlice.actions;

export default guarantorsSlice.reducer;
