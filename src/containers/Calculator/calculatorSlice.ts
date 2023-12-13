import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CalculatorStore {
  show: string;
  valueOne: string;
  valueTwo: string;
  result: number;
  switcher: boolean;
  operator: string | null;
}

const initialState: CalculatorStore = {
  show: '',
  valueOne: '',
  valueTwo: '',
  result: 0,
  switcher: true,
  operator: null,
};

export const calculatorSlice = createSlice({
  name: 'create',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      if (state.switcher) {
        state.valueOne += action.payload;
        state.show = state.valueOne;
      } else {
        state.valueTwo += action.payload;
        state.show = state.valueTwo;
      }
    },
    remove: (state) => {
      if (state.switcher) {
        if (state.valueOne.length) {
          const current = state.valueOne.split('');
          current.pop();
          state.valueOne = current.join('');
          state.show = state.valueOne;
        }
      } else {
        if (state.valueTwo.length) {
          const current = state.valueTwo.split('');
          current.pop();
          state.valueTwo = current.join('');
          state.show = state.valueTwo;
        }
      }
    },
    equal: (state) => {
      const numberOne = parseFloat(state.valueOne);
      const numberTwo = parseFloat(state.valueTwo);
      switch (state.operator) {
        case '+':
          state.result = numberOne + numberTwo;
          break;
        case '-':
          state.result = numberOne - numberTwo;
          break;
        case '*':
          state.result = numberOne * numberTwo;
          break;
        case '/':
          state.result = numberOne / numberTwo;
          break;
      }
      if (state.result.toString() === 'Infinity') {
        state.result = 0;
      } else if (!state.result) {
        state.result = 0;
      }
      state.valueOne = state.result.toString();
      state.result = 0;
      state.switcher = true;
      state.valueTwo = '';
      state.show = state.valueOne;
    },
    plus: (state) => {
      state.switcher = false;
      state.operator = '+';
    },
    minus: (state) => {
      state.switcher = false;
      state.operator = '-';
    },
    multiply: (state) => {
      state.switcher = false;
      state.operator = '*';
    },
    divide: (state) => {
      state.switcher = false;
      state.operator = '/';
    }
  },
});

export const calculatorReducer = calculatorSlice.reducer;

export const {add, remove, equal, plus, minus, multiply, divide} = calculatorSlice.actions;