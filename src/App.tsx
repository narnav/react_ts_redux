import React from 'react';
import './App.css';
import Cat from './cat_samp/Cat';
import { useAppSelector } from './app/hooks';
import { selectAge, selectCatName } from './cat_samp/catSlice'

function App() {
    const catName = useAppSelector(selectCatName);
    const catAge = useAppSelector(selectAge);
    return (
        <div className="App">
            <Cat />
            <Cat />
            <Cat />
            <Cat />

            <hr></hr>
            {catName}{catAge}
        </div>
    );
}

export default App;
