import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'

function App() {
/*   const [btnState, setBtnState] = useState({btnText});
  const toggleDarkMode =()=>{
    
  } */

  return (
    <>
   <Navbar title ="TextUtils"/>
   <TextForm label ="Text Converter"/>
   <About/>
    </>
  )
}

export default App
