import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name : "Prakash",
    age: 25,
    address: {
    city : 'Amalapuram',
    state: "AndhraPradesh",
    country: "India"
  }
}

  let newArr = ["wakeup", "eat breakfast", "study", "sleep"]

  return (
    <>
     <h1 className='text-3xl bg-green-500 p-3' >Vite with tailwind</h1>
     <Card userName = "Prasanna" post = "Associate Developer" myArr = {newArr}/>
     <Card myArr = {newArr}/>
    </>
  )
}

export default App
