import { useState } from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Mov from './Pages/Mov.jsx'
import Home from './Pages/Home.jsx'
import VMov from './Pages/VMov.jsx'
import CMov from './Pages/CMov.jsx'
import VEsc from './Pages/VEsc.jsx'
import './PagesCSS/App.css'

function App() {

  return (
      <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Mov' element={<Mov/>}/>
            <Route path='/CadastrarMov' element={<CMov/>}/>
            <Route path='/VizualizarMov' element={<VMov/>}/>
            <Route path='/VizualizarEsc' element={<VEsc/>}/>
          </Routes>
        </Router>
      
  )
}

export default App
