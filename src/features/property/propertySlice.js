import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProperties = createAsyncThunk(
  "properties",
  async (
    {
      type,
      address,
      files,
      images,
    },
    { rejectWithValue }
  ) => {
    try {      
      const { data } = await axios.post(
        `https://baitushumdemo.herokuapp.com/crm/api/property/`,
        {
            type,
            address,
            files,
            images,
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
  propertyInfo: null,
};

const propertiesSlise = createSlice({
  name: "properties",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProperties.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchProperties.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.propertyInfo = payload;
    },
    [fetchProperties.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default propertiesSlise.reducer;