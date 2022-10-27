import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDocuments = createAsyncThunk(
  "documents",
  async (
    {
      credit_spec_report,
      committee_decision,
      all_contracts,
      scoring,
      id_client,
      id_entity,
    },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `https://baitushumdemo.herokuapp.com/crm/api/dataKK/`,
        {
          credit_spec_report,
          committee_decision,
          all_contracts,
          scoring,
          id_client,
          id_entity,
        },
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

const initialState = {
  loading: false,
  error: null,
  success: false,
};

const documentsSlise = createSlice({
  name: "counterparties",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDocuments.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchDocuments.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.userToken;
    },
    [fetchDocuments.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default documentsSlise.reducer;
