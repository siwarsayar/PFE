import { configureStore } from '@reduxjs/toolkit';
import {
  authReducer,
  changeEmail,
  changePassword,
  loginSuccess,
  loginFailure,
} from './slices/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    
  },
});

export { store, changeEmail, changePassword, loginFailure,loginSuccess};
