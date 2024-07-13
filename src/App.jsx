import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Relatorios from './Pages/Relatorios';

import Movimentacao from './Pages/Movimentacao';
import MovIndeferida from './Pages/MovIndeferida';
import CadaVizuMov from './Pages/CadaVizuMov';

import PlanoContas from './Pages/PlanoDeContas';
import PlanoCadastrarVisualizar from './Pages/PlanoCadastrarVisualizar';

import Escrituracao from './Pages/Escrituracao';
import EscrituracaoVizualizar from './Pages/EscrituracaoVisualizar';

import Dashboard from './Pages/Dashboard';

import './PagesCSS/App.css'

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
            <Route path="/movimentacao/indeferidos " element={<MovIndeferida/>}/>
          <Route path="/plano-de-contas" element={<PlanoContas />} />
            <Route path="/plano-de-contas/cadastrar" element={<PlanoCadastrarVisualizar/>}/>
          <Route path="/escrituracao" element={<Escrituracao/>} />
          <Route path="/escrituracao/visualizar" element={<EscrituracaoVizualizar/>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
