import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchData } from './counterAPI';
import { Car } from '../../models/Car';

export interface CounterState {
  status: 'idle' | 'loading' | 'failed'|7;
  logged:boolean;
  cnt:number
  cars:Car[]
}

const initialState: CounterState = {
    status: 7,
    logged: true,
    cnt: 7,
    cars: []
};

export const getDataAsync = createAsyncThunk(
  'counter/fetchData',
  async () => {
    const response = await fetchData();
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loginLogout: (state) => {
        state.logged = !state.logged;
      },addnum: (state, action) => {
        console.log(        action.payload)
      },
      reset: (state) => {
        state.cnt = 4;
      },
      add: (state,action) => {
        state.cnt += action.payload;
      },
  },
  extraReducers: (builder) => {
    builder
    //   .addCase(getDataAsync.rejected, (state, action) => {
    //     state.status = 'failed';
    //   }).addCase(getDataAsync.pending, (state, action) => {
    //     state.status = 'loading';
    //   })
      .addCase(getDataAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.cars =action.payload
        state.status = 'idle';
      })

  },
});

export const { loginLogout,addnum,reset,add } = counterSlice.actions;
export const selectLogged = (state: RootState) => state.counter.logged;
export const selectCnt = (state: RootState) => state.counter.cnt;
export const selectCars = (state: RootState) => state.counter.cars;
export default counterSlice.reducer;
