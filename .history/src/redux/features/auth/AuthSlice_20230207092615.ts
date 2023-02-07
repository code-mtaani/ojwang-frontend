import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCreds: (state, action) => {
      const { user, accessToken } = action.payload;
      (state.user = user), (state.token = accessToken);
    },
    logOut: (state, action) => {
      (state.user = null), (state.token = null);
    },
  },
});

export const { setCreds, logOut } = AuthSlice.actions;
