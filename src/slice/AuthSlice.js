import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    userData: {}
  },
  reducers: {
    setAuth: (state, actions) => {
      state.isAuth = actions.payload;
    },
    setUserData: (state, actions) => {
        state.userData = actions.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const selectAuth = state => state.auth.isAuth;
export const selectUserData = state => state.auth.userData;
export const { setAuth, setUserData } = authSlice.actions

export default authSlice.reducer