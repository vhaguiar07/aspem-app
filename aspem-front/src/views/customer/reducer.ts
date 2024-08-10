import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Customer } from './types';

interface CustomerState {
  customers: Customer[];
  loading: boolean;
  error: string | null;
}

const initialState: CustomerState = {
  customers: [],
  loading: false,
  error: null,
};

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
  },
});

export const { fetchCustomersStart, fetchCustomersSuccess, fetchCustomersFailure } = customerSlice.actions;
export default customerSlice.reducer;
