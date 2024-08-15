import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RegisterUserData, RegisterState } from './types';
import { registerUser } from './registerApi';
import { RootState } from '../../store';

const initialState: RegisterState = {
  loading: false,
  error: null,
  success: false,
};

export const registerUserAsync = createAsyncThunk(
  'register/registerUser',
  async (userData: RegisterUserData) => {
    const response = await registerUser(userData);
    return response;
  }
);

const registerReducer = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;

        if (action.payload.access_token) {
          localStorage.setItem('token', action.payload.access_token);
        }

        window.location.href = '/';
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Erro desconhecido';
      });
  },
});

export const selectRegisterState = (state: RootState) => state.register;
export default registerReducer.reducer;
