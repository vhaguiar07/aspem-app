import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  username: string;
  password: string;
  error: string | null;
  success: string | null;
  isAuthenticated: boolean;
}

const initialState: LoginState = {
  username: '',
  password: '',
  error: null,
  success: null,
  isAuthenticated: !!localStorage.getItem('token'),
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    loginSuccess(state, action: PayloadAction<string>) {
      state.success = action.payload;
      state.error = null;
      state.isAuthenticated = true;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.success = null;
      state.isAuthenticated = false;
    },
    clearMessages(state) {
      state.error = null;
      state.success = null;
    },
    logout(state) {
      state.username = '';
      state.password = '';
      state.error = null;
      state.success = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
  },
});

export const { setUsername, setPassword, loginSuccess, loginFailure, clearMessages, logout } = loginSlice.actions;
export default loginSlice.reducer;
