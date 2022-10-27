import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCounterparties = createAsyncThunk(
  "counterparties",
  async (
    {
      id_credit_spec,
      full_name,
      credit_type,
      status,
      credit_sum,
      marital_status,
      credit_history,
      phone,
      address,
      client_actual_address,
      guarantor,
      income_statement,
      mortgaged_property,
      contracts,
      report,
      monitoring_report,
    },
    { rejectWithValue }
  ) => {
    try {
      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // };
      const token=JSON.parse(localStorage.getItem("userToken"));
      console.log(token.access);
      const config = {
        headers: {
          Authorization: `Bearer ${token.access}`,
        },
      };

      const { data } = await axios.post(
        `https://baitushumdemo.herokuapp.com/crm/api/client/`,
        {
          id_credit_spec,
          full_name,
          credit_type,
          status,
          credit_sum,
          marital_status,
          credit_history,
          phone,
          address,
          client_actual_address,
          guarantor,
          income_statement,
          mortgaged_property,
          contracts,
          report,
          monitoring_report,
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
  userInfo: null,
};

const counterpartiesSlise = createSlice({
  name: "counterparties",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCounterparties.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchCounterparties.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
    },
    [fetchCounterparties.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default counterpartiesSlise.reducer;
