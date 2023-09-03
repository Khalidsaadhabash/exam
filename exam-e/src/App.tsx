
import { Routes ,Route } from 'react-router-dom'
import './App.css'
import Cards from './pages/Cards'
import AddPro from './pages/AddPro'
import Nav from './componatis/Nav'
import Store from './pages/Store'
import Login from './componatis/Login'
import { useState } from 'react'
function App() {
const [token, setToken] = useState(localStorage.getItem("userToken")?? null)
  return (
    <>
    
    <Store/> :<Login />
     {/* < Cards/> */}
    </>
  )
}

export default App
