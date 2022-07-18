
import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled]= useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>
        <button data-testid="minus-button" onClick={()=>{
          setCounter((count)=>count - 1)
        }}
        disabled={disabled}>-</button>
        <button data-testid="plus-button" onClick={()=>{
          setCounter((count)=>count + 1)
        }}
        disabled={disabled}>+</button>
        <button style={{backgroundColor: "blue"}}
        data-testid="on/off-button" onClick={()=>{
          setDisabled((prev)=>!prev)
        }}>on/off</button>
      </header>
    </div>
  );
}

export default App;
