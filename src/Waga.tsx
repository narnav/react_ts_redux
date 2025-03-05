import React from 'react'
import { selectCnt, count } from './features/counter/sampSlice'
import { useAppSelector, useAppDispatch } from './app/hooks';

const Waga = () => {
    const cnt = useAppSelector(selectCnt);
    const dispatch = useAppDispatch();
    return (
        <div>Waga

            <h1> {cnt}</h1>
            <button onClick={() => dispatch(count())}>add</button>
        </div>
    )
}

export default Waga