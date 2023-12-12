import {configureStore} from '@reduxjs/toolkit';
import {lockReducer} from '../containers/Lock/lockSlice';
import {calculatorReducer} from '../containers/Calculator/calculatorSlice';

export const store = configureStore({
  reducer: {
    lock: lockReducer,
    calculator: calculatorReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
