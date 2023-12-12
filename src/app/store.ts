import {configureStore} from '@reduxjs/toolkit';
import {lockReducer} from '../containers/Lock/lockSlice';

export const store = configureStore({
  reducer: {
    lock: lockReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
