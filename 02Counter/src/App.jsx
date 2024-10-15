import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(0);
  // let counter=15;
  const count=()=>{
    // console.log("Add me", Math.random());
    // setcounter(counter+1);
    if (counter<20){
      setcounter(counter+1);
    }
    else{
      alert("you are more than 20");
    }
  }
  const reCount=()=>{
    if (counter>-1){
      setcounter(counter-1)
    }
    else{
      alert("you are less than -1");
    }
    
  }
  return (
    <> 
     <h1>Coffee or React</h1>
     <h2>Counter app : {counter}</h2>
     <button onClick={count}>Add me</button>
     <br />
     <button onClick={reCount}>Remove me</button>
    </>
  )
}

export default App
