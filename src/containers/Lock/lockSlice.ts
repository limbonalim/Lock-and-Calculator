import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface LockState {
  value: string;
}

const initialState: LockState = {
  value: '',
};

export const lockSlice = createSlice({
  name: 'lock',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
    }
  }
});

export const lockReducer = lockSlice.reducer;

export const {add} = lockSlice.actions;