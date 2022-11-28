import { createSlice } from "@reduxjs/toolkit";
import { deleteEntity, getEntities } from "./entityActions";
import { fetchEntities } from "./entityActions";

const initialState = {
  loading: false,
  error: null,
  success: false,
  entityUserInfo: null,
  getLoading: false,
  getError: null,
  getSuccess: false,
  entities: null,
  deleteLoading: false,
  deleteError: null,
  deleteSuccess: false,
  entityDel: null,
};

const entitySlice = createSlice({
  name: "entity",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchEntities.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchEntities.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entityUserInfo = payload;
    },
    [fetchEntities.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getEntities.pending]: (state) => {
      state.getLoading = true;
      state.getError = null;
    },
    [getEntities.fulfilled]: (state, { payload }) => {
      state.getLoading = false;
      state.entities = payload;
    },
    [getEntities.rejected]: (state, { payload }) => {
      state.getLoading = false;
      state.getError = payload;
    },
    [deleteEntity.pending]: (state) => {
      state.deleteLoading = true;
      state.deleteError = null;
    },
    [deleteEntity.fulfilled]: (state, { payload }) => {
      state.deleteLoading = false;
      state.entityDel = payload;
    },
    [deleteEntity.rejected]: (state, { payload }) => {
      state.deleteLoading = false;
      state.deleteError = payload;
    },
  },
});

export default entitySlice.reducer;
