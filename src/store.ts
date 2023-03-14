import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import scoreReducer from "./reducers/scoreSlice";
import questionReducer from "./reducers/questionSlice";
import { countryApi } from "./services/country";

export const store = configureStore({
  reducer: {
    [countryApi.reducerPath]: countryApi.reducer,
    score: scoreReducer,
    question: questionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
