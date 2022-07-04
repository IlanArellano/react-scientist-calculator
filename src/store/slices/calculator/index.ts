import { createSlice } from "@reduxjs/toolkit";
import { insert, clear, operator, total, initial } from "./reducers";

export const InputSlice = createSlice({
  name: "input",
  initialState: initial,
  reducers: {
    insert,
    clear,
    operator,
    total,
  },
});

export const insertInput = InputSlice.actions.insert;

export const clearInput = InputSlice.actions.clear;

export const operatorInput = InputSlice.actions.operator;

export const totalInput = InputSlice.actions.total;
