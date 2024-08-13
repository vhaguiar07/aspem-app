import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  username: string;
  password: string;
  error: string | null;
  success: string | null;
}

const initialState: LoginState = {
  username: '',
  password: '',
  error: null,
  success: null,
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
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.success = null;
    },
    clearMessages(state) {
      state.error = null;
      state.success = null;
    },
  },
});

export const { setUsername, setPassword, loginSuccess, loginFailure, clearMessages } = loginSlice.actions;
export default loginSlice.reducer;
