import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface LockState {
  value: string;
  status: number;
}

const initialState: LockState = {
  value: '',
  status: 0,
};

export const lockSlice = createSlice({
  name: 'lock',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
    },
    check: (state, action: PayloadAction<boolean>) => {
      if (state.value === '1234') {
        state.status = 1;
      } else {
        state.status = 2;
      }
      if (action.payload) {
        state.status = 0;
      }
    },
    remove: (state) => {
      if (state.value.length) {
        const current = state.value.split('');
        current.pop();
        state.value = current.join('');
      }
    }
  }
});

export const lockReducer = lockSlice.reducer;

export const {add, check, remove} = lockSlice.actions;