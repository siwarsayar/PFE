import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    password:'',
    isAuthenticated: false,
  },
  reducers: {
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changePassword(state, action) {
      state.password = action.payload;
    },
    loginSuccess(state) {
        state.isAuthenticated = true;
      },
     loginFailure(state) {
        state.isAuthenticated = false;
      },
  },
});

export const { changeEmail, changePassword ,loginFailure,loginSuccess} = authSlice.actions;
export const authReducer = authSlice.reducer;