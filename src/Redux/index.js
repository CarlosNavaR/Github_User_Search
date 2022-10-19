import { configureStore } from '@reduxjs/toolkit';
import { githubApi } from './Api';
import userReducer from './Slices/User/user.slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

export default store;
