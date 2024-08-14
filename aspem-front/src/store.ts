import { configureStore } from '@reduxjs/toolkit';
import userReducer from './views/user/reducer';
import customerReducer from './views/customer/reducer';
import loginReducer from './views/auth/reducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    customer: customerReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
