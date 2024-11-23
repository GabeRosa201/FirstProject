import Navbar from "./components/site/navbar"
import {Routes, Route }from "react-router-dom"
import CriaturasMagicas from "./pages/CriaturaMagicas"
import Home from "./pages/Home"
import Conversor from "./pages/Conversor"
import Inscricao from "./pages/Inscricao"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/criaturas" element={<CriaturasMagicas/>} /> 
        <Route path="/conversor" element={<Conversor/>} /> 
        <Route path="/inscricao" element={<Inscricao/>} /> 
      </Routes>
    </div>
  )
}

export default App
