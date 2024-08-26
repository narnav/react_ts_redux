import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Yagor from './features/counter/Yagor';
import CompStudent from './stud/CompStudent';

function App() {
  return (
    <div className="App">
        <CompStudent></CompStudent>
        <Counter />
    </div>
  );
}

export default App;
