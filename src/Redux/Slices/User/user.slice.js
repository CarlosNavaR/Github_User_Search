import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  followers: null,
  following: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setFollowers: (state, action) => {
      state.followers = action.payload;
    },
    setFollowing: (state, action) => {
      state.following = action.payload;
    },
    resetTree: () => {
      return initialState;
    },
  },
});

export const { setUser, setFollowers, setFollowing, resetTree } =
  userSlice.actions;
export default userSlice.reducer;
