import { apiSlice } from "./apiSlice";

export const authApiSclice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (creds) => ({
        url: "/token",
        method: "POST",
        body: { ...creds },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSclice;
