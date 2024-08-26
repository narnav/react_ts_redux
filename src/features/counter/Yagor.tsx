import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { add, getDataAsync, loginLogout, reset,selectCars } from './counterSlice';



const Yagor = () => {
    const cars = useAppSelector(selectCars);
    const dispatch = useAppDispatch();
    return (
        <div>
            <h1>{cars.length}</h1>
            <hr></hr>
            <button onClick={() => dispatch(getDataAsync())}>get data</button>
            <button onClick={() => dispatch(add(30))}>add 30</button>
            <button onClick={() => dispatch(add(20))}>add 20</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default Yagor