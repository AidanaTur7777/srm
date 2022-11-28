import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGuarantors = createAsyncThunk(
  "guarantor",
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
          "Content-Type": "multipart/form-data",
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
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getGuarantors = createAsyncThunk(
  "getGuarantors",
  async (arg, { getState, rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `https://baitushumdemo.herokuapp.com/crm/api/guarant/`,
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

export const deleteGuarantor = createAsyncThunk(
  "deleteGuarantor",
  async ({ id }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.delete(
        `https://baitushumdemo.herokuapp.com/crm/api/guarant/${id}/`,
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
