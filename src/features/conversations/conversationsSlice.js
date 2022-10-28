import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchConversations = createAsyncThunk(
  "conversations",
  async (
    { is_meeting, name, date, time, desc, file_results_report, file_statistics },
    { rejectWithValue }
  ) => {
    try {
        const results_report=new FormData();
        results_report.append("file",file_results_report)
        const statistics=new FormData();
        statistics.append("file",file_statistics)

      const { data } = await axios.post(
        `https://baitushumdemo.herokuapp.com/crm/api/convers/`,
        {
          is_meeting,
          name,
          date,
          time,
          desc,
        }
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

const initialState = {
  loading: false,
  error: null,
  success: false,
  conversationInfo: null,
};

const conversationsSlise = createSlice({
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
    },
    [fetchConversations.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default conversationsSlise.reducer;
