import { createSlice } from "@reduxjs/toolkit";
import { deleteClient, fetchClients, getClients } from "./clientsActions";

const initialState = {
  loading: false,
  error: null,
  success: false,
  clientInfo: null,
  getLoading: false,
  getError: null,
  getSuccess: false,
  clients: null,
  deleteLoading: false,
  deleteError: null,
  deleteSuccess: false,
  clientsDelete: null,
};

const counterpartiesSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchClients.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchClients.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.clientInfo = payload;
    },
    [fetchClients.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getClients.pending]: (state) => {
      state.getLoading = true;
      state.getError = null;
    },
    [getClients.fulfilled]: (state, { payload }) => {
      state.getLoading = false;
      state.clients = payload;
    },
    [getClients.rejected]: (state, { payload }) => {
      state.getLoading = false;
      state.getError = payload;
    },
    [deleteClient.pending]: (state) => {
      state.deleteLoading = true;
      state.deleteError = null;
    },
    [deleteClient.fulfilled]: (state, { payload }) => {
      state.deleteLoading = false;
      state.clientsDelete = payload;
    },
    [deleteClient.rejected]: (state, { payload }) => {
      state.deleteLoading = false;
      state.deleteError = payload;
    },
  },
});

export default counterpartiesSlice.reducer;
