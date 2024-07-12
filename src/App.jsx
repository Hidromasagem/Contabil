import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Relatorios from './Pages/Relatorios';
import Movimentacao from './Pages/Movimentacao';
import PlanoDeContas from './Pages/PlanoDeContas';
import Dashboard from './Pages/Dashboard';
import './PagesCSS/App.css'
import CadaVizuMov from './Pages/CadaVizuMov';
import MovIndeferida from './Pages/MovIndeferida';


function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/relatorios" element={<Relatorios />} />
          <Route path="/movimentacao" element={<Movimentacao />} />
            <Route path="/movimentacao/cadastrar" element={<CadaVizuMov/>} />
            <Route path="/mocimentacao/indeferidos " element={<MovIndeferida/>}/>
          <Route path="/plano-de-contas" element={<PlanoDeContas />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
