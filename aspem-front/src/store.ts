import { configureStore } from '@reduxjs/toolkit';
import userReducer from './views/user/reducer';
import customerReducer from './views/customer/reducer';
import loginReducer from './views/auth/reducer';
import registerReducer from './views/register/reducer';
import autarquiasReducer from './views/autarquia/reducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    customer: customerReducer,
    login: loginReducer,
    register: registerReducer,
    autarquias: autarquiasReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
