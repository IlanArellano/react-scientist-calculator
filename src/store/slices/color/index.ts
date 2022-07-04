import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "color",
  initialState: "white",
  reducers: {
    SwitchColor: (state, action) => action.payload,
  },
});

export const setColor = colorSlice.actions.SwitchColor;
