import { useState } from 'react';
import './App.css';

function App() {

const[num,setnum]=useState('')

const handleClick =(e)=>{
  setnum(num.concat(e.target.name))
}

const clear =()=>{
  setnum('')
}
const backspace=()=>{
  setnum(num.slice(0))
}
const Eval=()=>{
  setnum(eval(num))
}



return (
    <div className="App">
     <div className='calculator'>
           <input type="text" className='panel' value={num} />
           <p>@manvith._.k._.gatty</p>
    <div className='keypad'>
    <button className='btn' name='Clear' onClick={clear} >Clear</button>
      <button className='btn' name='0' onClick={handleClick}>0</button>
      <button className='btn' name='1' onClick={handleClick}>1</button>
      <button className='btn' name='+'onClick={handleClick}>+</button>
      <button className='btn' name='2' onClick={handleClick}>2</button>
      <button className='btn' name='3'onClick={handleClick}>3</button>
      <button className='btn' name='4' onClick={handleClick}>4</button>
      <button className='btn' name='-' onClick={handleClick}>-</button>
      <button className='btn' name='5' onClick={handleClick}>5</button>
      <button className='btn' name='6' onClick={handleClick}>6</button>
      <button className='btn' name='7'onClick={handleClick}>7</button>
      <button className='btn' name='*' value='&times' onClick={handleClick}>X</button>
      <button className='btn' name='8'onClick={handleClick}>8</button>
      <button className='btn' name='9' onClick={handleClick}>9</button>
      <button className='btn' name='%'onClick={handleClick}>%</button>
      <button className='btn' name='/' value='&divide' onClick={handleClick}>/</button>
      <button id='equal' name='=' onClick={Eval}>=</button>
    </div>
     </div>
    </div>
  );
}

export default App;
