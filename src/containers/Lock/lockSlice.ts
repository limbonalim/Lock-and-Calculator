import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PIN} from '../../constants';


interface LockState {
  value: string;
  pin: string[];
  style: string[];
  status: number;
  link: boolean;
  lockButton: boolean;
}

const initialState: LockState = {
  value: '',
  pin: [],
  style: ['display'],
  status: 0,
  link: false,
  lockButton: false,
};

export const lockSlice = createSlice({
  name: 'lock',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      if (state.value.length < 4 && state.pin.length < 4 && !state.lockButton) {
        state.value += action.payload;
        state.pin.push('*');
      }
    },
    check: (state, action: PayloadAction<boolean>) => {
      if (state.status === 0) {
        state.style = ['display'];
        state.lockButton = false;
      }

      if (!action.payload) {
        if (state.value === PIN) {
          state.status = 1;
          state.style = [...state.style, 'open'];
          state.link = true;
          state.lockButton = true;
        } else {
          state.style = [...state.style, 'close'];
          state.status = 2;
          state.lockButton = true;
        }
      }
      if (action.payload) {
        state.status = 0;
      } else {
        state.value = '';
        state.pin = [];
      }
    },
    remove: (state) => {
      if (state.value.length) {
        const current = state.value.split('');
        current.pop();
        state.value = current.join('');
        state.pin.pop();
      }
    },
    refresh: (state) => {
      state.value = '';
      state.pin = [];
      state.style = ['display'];
      state.status = 0;
      state.link = false;
    }
  },
});

export const lockReducer = lockSlice.reducer;

export const {add, check, remove, refresh} = lockSlice.actions;