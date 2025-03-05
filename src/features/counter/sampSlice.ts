import {  createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface galState {
    cnt:number
    cars:object[]
}
const initialState: galState = {
    cnt: 3,
    cars: []
};

export const sampSlice = createSlice({
  name: 'samp',
  initialState,
  reducers: {
    count: (state) => {
        state.cnt += 1;
      },
  }
  });

export const { count } = sampSlice.actions;
export const selectCnt = (state: RootState) => state.samp.cnt;
export default sampSlice.reducer;
