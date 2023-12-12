import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PIN} from '../../constants';

interface LockState {
  value: string;
  status: number;
  showLink: boolean;
}

const initialState: LockState = {
  value: '',
  status: 0,
  showLink: false
};

export const lockSlice = createSlice({
  name: 'lock',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      if (state.value.length < 4) {
        state.value += action.payload;
      }
    },
    check: (state, action: PayloadAction<boolean>) => {
      if (state.value === PIN) {
        state.status = 1;
        state.showLink = true;
      } else {
        state.status = 2;
      }

      if (action.payload) {
        state.status = 0;
      } else {
        state.value = '';
      }
    },
    remove: (state) => {
      if (state.value.length) {
        const current = state.value.split('');
        current.pop();
        state.value = current.join('');
      }
    },
    refresh: (state) => {
      state = {
        value: '',
        status: 0,
      };
    }
  }
});

export const lockReducer = lockSlice.reducer;

export const {add, check, remove, refresh} = lockSlice.actions;