import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectCatName, eat,cngName,selectAge } from './catSlice'

const Cat = () => {
    const catName = useAppSelector(selectCatName);
    const catAge = useAppSelector(selectAge);
    const dispatch = useAppDispatch();
    const [age, setage] = useState(0)
    const [name, setname] = useState("")
    return (
        <div>
            Cat name:{catName}, Age:{catAge}
            <hr/>
            <button onClick={() => dispatch(eat())}>Eat</button>
            <button onClick={()=>dispatch(cngName({name,age}))}>Cng name </button>
            Name:<input onChange={(e)=>setname(e.target.value)}/>
            Age:<input onChange={(e)=>setage(+e.target.value)}/>
        </div>
    )
}

export default Cat