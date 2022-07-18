import { createSlice } from "@reduxjs/toolkit";
import {
  insert,
  clear,
  operator,
  total,
  remove,
  mode,
  operatorCurrentValue,
  insertScientific,
  operatorCurrentValueScientific,
  initial,
} from "./reducers";

export const InputSlice = createSlice({
  name: "input",
  initialState: initial,
  reducers: {
    insert,
    clear,
    operator,
    total,
    mode,
    remove,
    operatorCurrentValue,
    insertScientific,
    operatorCurrentValueScientific,
  },
});

export const insertInput = InputSlice.actions.insert;

export const clearInput = InputSlice.actions.clear;

export const operatorInput = InputSlice.actions.operator;

export const totalInput = InputSlice.actions.total;

export const modeInput = InputSlice.actions.mode;

export const removeInput = InputSlice.actions.remove;

export const operatorCurrentValueInput =
  InputSlice.actions.operatorCurrentValue;

export const insertScientificInput = InputSlice.actions.insertScientific;

export const operatorCurrentValueScientificInput =
  InputSlice.actions.operatorCurrentValueScientific;
