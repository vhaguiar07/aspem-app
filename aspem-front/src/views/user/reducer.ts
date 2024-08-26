import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './types';

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
  success: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  success: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUsersStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
      state.loading = false;
    },
    fetchUsersFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    updateUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    updateUserSuccess(state, action: PayloadAction<User>) {
      const index = state.users.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
      state.loading = false;
    },
    setSuccessMessage(state, action: PayloadAction<string>) {
      state.success = action.payload;
    },
    updateUserFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.success = null;
      state.loading = false;
    },
    clearMessages(state) {
      state.success = null;
      state.error = null;
    },
  },
});

export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure, updateUserStart, updateUserSuccess, setSuccessMessage, updateUserFailure, clearMessages } = userSlice.actions;
export default userSlice.reducer;
