import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const counterForm = createAsyncThunk(
  "company",
  async (
    {
      id,
      full_name,
      credit_type,
      status,
      credit_sum,
      marital_status,
      phone,
      address,
      client_actual_address,
      guarantor,
      mortgaged_property,
      id_guarantor,
      id_property,
      meet_conversation,
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
        `https://baitushumdemo.herokuapp.com/crm/api/client/`,
        {
          id,
          full_name,
          credit_type,
          status,
          credit_sum,
          marital_status,
          phone,
          address,
          client_actual_address,
          guarantor,
          mortgaged_property,
          id_guarantor,
          id_property,
          meet_conversation,
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
  success: true,
};

const userSlice = createSlice({
  name: "counterparties",
  initialState,
  reducers: {},
  extraReducers: {
    [counterForm.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [counterForm.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.userToken;
    },
    [counterForm.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { logout } = userSlice.actions;

export default counterForm.reducer;
