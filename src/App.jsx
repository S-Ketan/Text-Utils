import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar title ="Hello world"/>
   <TextForm />
    </>
  )
}

export default App
