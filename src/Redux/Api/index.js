import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const githubApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  keepUnusedDataFor: 1,
  endpoints: builder => ({
    getUserbyUsername: builder.query({
      query: username => `users/${username}`,
    }),
    getFollowersByUsername: builder.query({
      query: username => `users/${username}/followers`,
    }),
    getFollowingByUsername: builder.query({
      query: username => `users/${username}/following`,
    }),
  }),
});

export const {
  useGetUserbyUsernameQuery,
  useGetFollowersByUsernameQuery,
  useGetFollowingByUsernameQuery,
} = githubApi;
