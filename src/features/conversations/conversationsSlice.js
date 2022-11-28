import { createSlice } from "@reduxjs/toolkit";
import {
  deleteConversation,
  fetchConversations,
  getConversations,
} from "./conversationsActions";

const initialState = {
  loading: false,
  error: null,
  success: false,
  conversationInfo: null,
  getLoading: false,
  getError: null,
  getSuccess: false,
  conversations: null,
  deleteLoading: false,
  deleteError: null,
  deleteSuccess: false,
  conversationDel: null,
};

const conversationsSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchConversations.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchConversations.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.conversationInfo = payload;
      state.success = true;
    },
    [fetchConversations.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getConversations.pending]: (state) => {
      state.getLoading = true;
      state.getError = null;
    },
    [getConversations.fulfilled]: (state, { payload }) => {
      state.getLoading = false;
      state.conversations = payload;
    },
    [getConversations.rejected]: (state, { payload }) => {
      state.getLoading = false;
      state.getError = payload;
    },
    [deleteConversation.pending]: (state) => {
      state.deleteLoading = true;
      state.deleteError = null;
    },
    [deleteConversation.fulfilled]: (state, { payload }) => {
      state.deleteLoading = false;
      state.conversationDel = payload;
    },
    [deleteConversation.rejected]: (state, { payload }) => {
      state.deleteLoading = false;
      state.deleteError = payload;
    },
  },
});

export default conversationsSlice.reducer;
