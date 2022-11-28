import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchActivites = createAsyncThunk(
  "activites",
  async ({ activites_add }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `https://baitushumdemo.herokuapp.com/crm/api/activity/`,
        { activites_add },
        config
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const getActivities = createAsyncThunk(
  "getActivities",
  async (arg, { getState, rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `https://baitushumdemo.herokuapp.com/crm/api/activity/`,
        config
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
