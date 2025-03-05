import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import  sampSlice  from '../features/counter/sampSlice';
import  catSlice  from '../cat_samp/catSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    samp:sampSlice,
    cat:catSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
