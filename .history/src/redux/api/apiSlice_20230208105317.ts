import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { logOut, setCreds } from "../features/auth/authSlice";
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8900/api/v1",
  credentials: "include",
  prepareHeaders: (headers: Headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// custom query function

const baseQueryWithRefresh = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.originalStatus === 403) {
    console.log("refresh token");
    // send refresh token to get new acess token
    const refresh = await baseQuery("/token/refresh", api, extraOptions);
    console.log(refresh);

    if (refresh?.data) {
      const loggedInUser = api.getState().auth.user;

      // save new token
      api.dispatch(setCreds({ ...refresh.data, user }));

      // retry original query with new aces token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut);
    }
  }
};
