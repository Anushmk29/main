import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
   let myobj ={
    username:"anush",
    age:21
   }

   let arr =[1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5 '  >TAILWIND TEST</h1>
      {/* <Card channel="Anush" object={myobj} somearr={arr}/> */}
      <Card username="ANUSH" btnText ="push here"/>
      <Card username="AVIOLA" />
       
    </>
  )
}

export default App
