import { configureStore } from '@reduxjs/toolkit';
import userReducer from './views/user/reducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Tipagem para o estado da store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
