import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Estado } from './types';

interface EstadoState {
  estados: Estado[];
  loading: boolean;
  error: string | null;
  success: string | null;
}

const initialState: EstadoState = {
  estados: [],
  loading: false,
  error: null,
  success: null,
};

const estadoSlice = createSlice({
  name: 'estados',
  initialState,
  reducers: {
    fetchEstadosRequest(state) {
      state.loading = true;
      state.error = null;
      state.success = null;
    },
    fetchEstadosSuccess(state, action: PayloadAction<Estado[]>) {
      state.loading = false;
      state.estados = action.payload;
      state.success = 'Estados carregadas com sucesso!';
    },
    fetchEstadosFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.success = null;
    },
    addEstadoSuccess(state, action: PayloadAction<Estado>) {
      state.estados.push(action.payload);
      state.success = 'Servidor adicionado com sucesso!';
      state.error = null;
    },
    addEstadoFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.success = null;
    },
    updateEstadoSuccess(state, action: PayloadAction<Estado>) {
      state.estados.push(action.payload);
      state.success = 'Servidor atualizado com sucesso!';
      state.error = null;
    },
    deleteEstadoSuccess(state, action: PayloadAction<string>) {
      state.estados = state.estados.filter(estado => estado.id !== action.payload);
      state.success = 'Servidor removido com sucesso!';
      state.error = null;
    },
    clearMessages(state) {
      state.error = null;
      state.success = null;
    },
  },
});

export const {
  fetchEstadosRequest,
  fetchEstadosSuccess,
  fetchEstadosFailure,
  addEstadoSuccess,
  addEstadoFailure,
  updateEstadoSuccess,
  deleteEstadoSuccess,
  clearMessages,
} = estadoSlice.actions;

export default estadoSlice.reducer;
