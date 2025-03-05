import React from 'react'
import { selectCnt, count } from './features/counter/sampSlice'
import { useAppSelector, useAppDispatch } from './app/hooks';
import Waga from './Waga';

const Test = () => {
    const cnt = useAppSelector(selectCnt);
    const dispatch = useAppDispatch();
    return (
        <div style={{ backgroundColor: "purple" }}>Test
            <Waga></Waga>
            <h1> {cnt}</h1>
            <button onClick={() => dispatch(count())}>add</button>
        </div>
    )
}

export default Test