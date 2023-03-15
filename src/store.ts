import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./reducers/scoreSlice";
import { countryApi } from "./services/country";

export const store = configureStore({
  reducer: {
    [countryApi.reducerPath]: countryApi.reducer,
    score: scoreReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
