import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
    <h1 className='bg-green-400 p-5 rounded-lg text-black'>My tailwind+React App</h1>
    <Card username="asad" btnText="click me"/>
    <Card username="Maham" btnText="check me"/>
     
    </>
  )
}

export default App
