import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecipients = createAsyncThunk(
  "counterparties",
  async (
    {
      full_name,
      status,
      credit_history,
      phone,
      address,
      actual_address,
      income_statement,
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
        `https://baitushumdemo.herokuapp.com/crm/api/guarant/`,
        {
            full_name,
            status,
            credit_history,
            phone,
            address,
            actual_address,
            income_statement,
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
  recipientInfo: "",
};

const recipientsSlise = createSlice({
  name: "recipients",
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [fetchRecipients.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchRecipients.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.recipientInfo = payload;
    },
    [fetchRecipients.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export const { setRecipientInformation } = recipientsSlise.actions;

export default recipientsSlise.reducer;
