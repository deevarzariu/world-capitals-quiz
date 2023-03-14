import { createSlice } from "@reduxjs/toolkit";

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

export default scoreSlice.reducer;
