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
      query: data => `users/${data.username}/followers?page=${data.page}`,
    }),
    getFollowingByUsername: builder.query({
      query: data => `users/${data.username}/following?page=${data.page}`,
    }),
  }),
});

export const {
  useGetUserbyUsernameQuery,
  useGetFollowersByUsernameQuery,
  useGetFollowingByUsernameQuery,
} = githubApi;
