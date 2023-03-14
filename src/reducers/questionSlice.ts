import { createSlice } from "@reduxjs/toolkit";

export interface QuestionState {
  current: number;
  limit: number;
}

export const initialState: QuestionState = {
  current: 1,
  limit: 10,
};

export const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    goForward: (state) => {
      state.current += 1;
    },
    reset: (state) => {
      state.current = 1;
    },
  },
});

export const { goForward, reset } = questionSlice.actions;

export default questionSlice.reducer;
