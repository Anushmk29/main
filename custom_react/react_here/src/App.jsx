// import Anush from './anush'
import { useState } from 'react'
import './App.css'

function App() {
 let [Counter,setCounter] = useState(0)
// let counter = 0
// const addValue = ()=>{
//   //  console.log("value added",Math.random())
//   Counter+= 1
//   console.log("clicked",Counter);
// }
const addValue =  ()=>{
    Counter = Counter+1
  setCounter(Counter)
  console.log(Counter);
}
const decValue = ()=>{
 let dec = Counter -1
  setCounter(dec)
  console.log(dec);
}
  return (
    
    //  <Anush/>
    <>
    <h1>counter</h1>
    <h2>Counter value:{Counter}</h2>

    <button onClick={addValue} type="button">add value </button> 
    <br />
    <button onClick={decValue} type="button-dec">decrease value</button> 
   </> 
  )
}

export default App
