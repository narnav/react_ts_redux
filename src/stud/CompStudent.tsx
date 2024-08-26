import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addDataAsync, delDataAsync, getDataAsync, selectStudents } from './studentSlice'

const CompStudent = () => {
    const dispatch = useAppDispatch()
    const students = useAppSelector(selectStudents)
    const [sName, setsName] = useState<String>("")
    const [age, setage] = useState<Number>(0)
    useEffect(() => {
        dispatch(getDataAsync())
    }, [])

    return (
        <div>

            sName<input onChange={(e) => setsName(e.target.value)} />
            Age<input onChange={(e) => setage(+e.target.value)} />
            <button onClick={() => dispatch(addDataAsync({ age, sName }))}>Add student</button>

            {students.length}
            {students.map((student, i) => <div key={i} >{student.sName}
                <button onClick={() => dispatch(delDataAsync(""+ student.id))}>del</button>
            </div>)}
        </div>
    )
}

export default CompStudent