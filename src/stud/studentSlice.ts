import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
import { fetchData,addData,delData } from './studentAPI';
import { Student } from '../models/Student';

// state
export interface studentState {
    students: Student[]
}

const initialState: studentState = {
    students: []
};

// async
export const getDataAsync = createAsyncThunk(
    'student/fetchData',
    async () => {
        const response = await fetchData();
        return response.data;
    }
);
export const addDataAsync = createAsyncThunk(
    'student/addData',
    async (stud:Student) => {
        
        const response = await addData(stud);
        return response.data;
    }
);
export const delDataAsync = createAsyncThunk(
    'student/delData',
    async (id:String) => {
        console.log(`delete  ${id}`);
        
        const response = await delData(id);
        return response.data;
    }
);
// Slicer
export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        addnum: (state, action) => {
            console.log(action.payload)
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(getDataAsync.fulfilled, (state, action) => {
                state.students =action.payload
                console.log(action.payload);
            }).addCase(addDataAsync.fulfilled, (state, action) => {
                state.students.push(action.payload)
                console.log(action.payload);
            }).addCase(delDataAsync.fulfilled, (state, action) => {
                state.students=state.students.filter(item =>  action.payload.id != item.id)
                console.log(action.payload);
            })

    },
});

export const { addnum } = studentSlice.actions;
export const selectStudents = (state: RootState) => state.student.students;
export default studentSlice.reducer;
