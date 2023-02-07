import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/auth/AuthSlice";

export const store = configureStore({
  reducer: {
    AuthReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
