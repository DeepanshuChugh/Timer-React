
import { useState } from 'react';
import './App.css';
import Timer from './Timer';

function App() {
  const [start, setStart]=useState(20)
  const [end, setEnd]=useState(40)
  return (
    <div className="App">
     <Timer start={start} setStart={setStart} setEnd={setEnd} end={end}/>
    </div>
  );
}

export default App;
