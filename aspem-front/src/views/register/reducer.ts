import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RegisterUserData, RegisterState } from './types';
import { registerUser } from './registerApi';
import { RootState } from '../../store';

const initialState: RegisterState = {
  loading: false,
  error: null,
  success: false,
  failure: null,
  successMessage: '',
};

export const registerUserAsync = createAsyncThunk(
  'register/registerUser',
  async (userData: RegisterUserData, { rejectWithValue }) => {
    try {
      const response = await registerUser(userData);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Erro desconhecido');
    }
  }
);

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    clearMessages(state) {
      state.successMessage = '';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = '';
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = 'Usuário registrado com sucesso!';

        if (action.payload.access_token) {
          localStorage.setItem('token', action.payload.access_token);
        }

        window.location.href = '/';
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Erro desconhecido';
      });
  },
});

export const { clearMessages } = registerSlice.actions;

export const selectRegisterState = (state: RootState) => state.register;

export default registerSlice.reducer;
