import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface CatState {
  status: 'idle' | 'sleepng' | 'eating'|'pooping';
  cName:string
  age:number
}

const initialState: CatState = {
    status: 'idle',
    cName: 'Shraga',
    age: 2
};

export const getDataAsync = createAsyncThunk(
  'cat/fetchData',
  async () => {
    // const response = await fetchData();
    // return response.data;
  }
);

export const catSlice = createSlice({
  name: 'cat',
  initialState,
  reducers: {
    eat: (state) => {
        console.log("eaaaaaaaaaaaaaaaaaaat");
      },
      cngName:(state,actions) => {
        console.log(actions.payload);
        state.cName =actions.payload.name
        state.age =actions.payload.age
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = 'idle';
      })
  },
});

export const { eat,cngName} = catSlice.actions;
export const selectCatName = (state: RootState) => state.cat.cName;
export const selectAge = (state: RootState) => state.cat.age;
export default catSlice.reducer;
