import { createSlice } from "@reduxjs/toolkit";
import { fetchActivites, getActivities } from "./activityActions";

const initialState = {
  loading: false,
  error: null,
  success: false,
  activitesInfo: "",
  activities: null,
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
