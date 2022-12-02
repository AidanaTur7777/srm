import { createSlice } from "@reduxjs/toolkit";
import { fetchActivites, getActivities, patchActivity } from "./activityActions";

const initialState = {
  loading: false,
  error: null,
  success: false,
  activitesInfo: "",
  activities: null,
  patchLoading: false,
  patchError: null,
  patchSuccess: false,
};

const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchActivites.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchActivites.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.activitesInfo = payload;
    },
    [fetchActivites.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [patchActivity.pending]: (state) => {
      state.patchLoading = true;
      state.patchError = null;
      state.patchSuccess = false;
    },
    [patchActivity.fulfilled]: (state, { payload }) => {
      state.patchLoading = false;
      state.patchSuccess = true;
      state.patchError = null;
    },
    [patchActivity.rejected]: (state, { payload }) => {
      state.patchLoading = false;
      state.patchError = payload;
      state.patchSuccess = false;
    },
    [getActivities.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getActivities.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.activities = payload;
    },
    [getActivities.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export default activitySlice.reducer;
