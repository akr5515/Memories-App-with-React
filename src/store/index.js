import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';
import userReducer from './username'

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer,user: userReducer },
});

export default store;
