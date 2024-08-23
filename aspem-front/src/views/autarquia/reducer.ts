import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Autarquia } from './types';

interface AutarquiaState {
  autarquias: Autarquia[];
  loading: boolean;
  error: string | null;
  success: string | null;
}

const initialState: AutarquiaState = {
  autarquias: [],
  loading: false,
  error: null,
  success: null,
};

const autarquiaSlice = createSlice({
  name: 'autarquias',
  initialState,
  reducers: {
    fetchAutarquiasRequest(state) {
      state.loading = true;
      state.error = null;
      state.success = null;
    },
    fetchAutarquiasSuccess(state, action: PayloadAction<Autarquia[]>) {
      state.loading = false;
      state.autarquias = action.payload;
      state.success = 'Autarquias carregadas com sucesso!';
    },
    fetchAutarquiasFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.success = null;
    },
    addAutarquiaSuccess(state, action: PayloadAction<Autarquia>) {
      state.autarquias.push(action.payload);
      state.success = 'Autarquia adicionada com sucesso!';
      state.error = null;
    },
    addAutarquiaFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.success = null;
    },
    updateAutarquiaSuccess(state, action: PayloadAction<Autarquia>) {
      state.autarquias.push(action.payload);
      state.success = 'Autarquia atualizada com sucesso!';
      state.error = null;
    },
    deleteAutarquiaSuccess(state, action: PayloadAction<string>) {
      state.autarquias = state.autarquias.filter(autarquia => autarquia.id !== action.payload);
      state.success = 'Autarquia removida com sucesso!';
      state.error = null;
    },
    clearMessages(state) {
      state.error = null;
      state.success = null;
    },
  },
});

export const {
  fetchAutarquiasRequest,
  fetchAutarquiasSuccess,
  fetchAutarquiasFailure,
  addAutarquiaSuccess,
  addAutarquiaFailure,
  updateAutarquiaSuccess,
  deleteAutarquiaSuccess,
  clearMessages,
} = autarquiaSlice.actions;

export default autarquiaSlice.reducer;
