import { configureStore } from '@reduxjs/toolkit';
import userReducer from './views/user/reducer';
import customerReducer from './views/customer/reducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    customer: customerReducer,
  },
});

// Tipagem para o estado da store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
