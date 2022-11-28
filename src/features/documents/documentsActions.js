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
      const token = JSON.parse(localStorage.getItem("userToken"));

      const config = {
        headers: {
          Authorization: `Bearer ${token.access}`,
          "Content-Type": "multipart/form-data",
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
      if (error.response && error.response.data) {
        console.log(error);
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const getDocuments = createAsyncThunk(
  "getDocuments",
  async (arg, { getState, rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `https://baitushumdemo.herokuapp.com/crm/api/dataKK/`,
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

export const deleteDocument = createAsyncThunk(
  "deleteDocument",
  async ({ id }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.delete(
        `https://baitushumdemo.herokuapp.com/crm/api/dataKK/${id}/`,
        {
          id,
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
