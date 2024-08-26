import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectLogged,loginLogout,addnum,selectCnt
} from './counterSlice';

export function Counter() {
  const Logged = useAppSelector(selectLogged);
  const cnt = useAppSelector(selectCnt);
  const dispatch = useAppDispatch();

  return (
    <div>
<h1>        {cnt}</h1>
        {Logged ? "logged":"kill him"}
        <button onClick={()=>dispatch(loginLogout())}>login/logout</button>
        <button onClick={()=>dispatch(addnum(33))}>login/logout</button>
    </div>
  );
}
