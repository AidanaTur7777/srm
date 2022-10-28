import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEntities = createAsyncThunk(
  "counterparties",
  async (
    {
      id_credit_spec,
      client_company,
      full_name_director,
      inn,
      credit_type,
      status,
      credit_sum,
      phone,
      address,
      client_actual_address,
      mortgaged_property,
      average_salary,
      own_contribution,
      assets,
      current_loan,
      id_company,
      id_property,
      id_num_parley,
    },
    { rejectWithValue }
  ) => {
    try {
      const token = JSON.parse(localStorage.getItem("userToken"));
      console.log(token.access);
      const config = {
        headers: {
          Authorization: `Bearer ${token.access}`,
        },
      };

      const { data } = await axios.post(
        `https://baitushumdemo.herokuapp.com/crm/api/entity/`,
        {
          id_credit_spec,
          client_company,
          full_name_director,
          inn,
          credit_type,
          status,
          credit_sum,
          phone,
          address,
          client_actual_address,
          mortgaged_property,
          average_salary,
          own_contribution,
          assets,
          current_loan,
          id_company,
          id_property,
          id_num_parley,
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
  entityUserInfo: null,
};

const entitySlise = createSlice({
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
  },
});

export default entitySlise.reducer;
