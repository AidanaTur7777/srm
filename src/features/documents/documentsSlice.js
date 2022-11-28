import { createSlice } from "@reduxjs/toolkit";
import {
  deleteDocument,
  fetchDocuments,
  getDocuments,
} from "./documentsActions";

const initialState = {
  loading: false,
  error: null,
  success: false,
  documents: null,
  getLoading: false,
  getError: null,
  getSuccess: false,
  documentsList: null,
  deleteLoading: false,
  deleteError: null,
  deleteSuccess: false,
  deleteResult: null,
};

const documentsSlice = createSlice({
  name: "documents",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDocuments.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchDocuments.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.documents = payload;
      state.success = true;
    },
    [fetchDocuments.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getDocuments.pending]: (state) => {
      state.getLoading = true;
      state.getError = null;
    },
    [getDocuments.fulfilled]: (state, { payload }) => {
      state.gerLoading = false;
      state.documentsList = payload;
    },
    [getDocuments.rejected]: (state, { payload }) => {
      state.getLoading = false;
      state.getError = payload;
    },
    [deleteDocument.pending]: (state) => {
      state.deleteLoading = true;
      state.deleteError = null;
    },
    [deleteDocument.fulfilled]: (state, { payload }) => {
      state.deleteLoading = false;
      state.deleteResult = payload;
    },
    [deleteDocument.rejected]: (state, { payload }) => {
      state.deleteLoading = false;
      state.deleteError = payload;
    },
  },
});

export default documentsSlice.reducer;
