import { createSlice } from "@reduxjs/toolkit";
import { NewProblem } from "../pages/getting-started";

export const pagelice = createSlice({
  name: "page",
  initialState: {
    value: {
      title: "New Problem",
      key: "newProblem",
    },
  },
  reducers: {
    newPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { newPage } = pagelice.actions;

export default pagelice.reducer;
