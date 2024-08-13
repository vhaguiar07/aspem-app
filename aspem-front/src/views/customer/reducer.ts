import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Customer } from './types';

interface CustomerState {
  customers: Customer[];
  customer: Customer | null; // Estado para um único cliente
  loading: boolean;
  error: string | null;
}

const initialState: CustomerState = {
  customers: [],
  customer: null,
  loading: false,
  error: null,
};

// Thunk para buscar um cliente individual
export const fetchCustomerById = createAsyncThunk(
  'customer/fetchCustomerById',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/customers/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue('Erro ao buscar o cliente.');
    }
  }
);

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    fetchCustomersStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCustomersSuccess(state, action: PayloadAction<Customer[]>) {
      state.customers = action.payload;
      state.loading = false;
    },
    fetchCustomersFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    // Se precisar de actions sincronas para cliente individual, adicione aqui
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomerById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.customer = null; // Limpa o estado anterior do cliente
      })
      .addCase(fetchCustomerById.fulfilled, (state, action: PayloadAction<Customer>) => {
        state.customer = action.payload;
        state.loading = false;
      })
      .addCase(fetchCustomerById.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export const {
  fetchCustomersStart,
  fetchCustomersSuccess,
  fetchCustomersFailure,
} = customerSlice.actions;
export default customerSlice.reducer;
