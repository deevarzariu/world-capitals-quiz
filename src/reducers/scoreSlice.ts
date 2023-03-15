import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface StoreState {
  value: number;
}

const initialState: StoreState = {
  value: 0,
};

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, reset } = scoreSlice.actions;

export const selectScore = (state: RootState) => state.score.value;

export default scoreSlice.reducer;
