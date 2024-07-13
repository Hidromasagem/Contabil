// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Relatorios from './Pages/Relatorios';
import Movimentacao from './Pages/Movimentacao';
import CadastrarMovimentacao from './Pages/CadastrarMovimentacao'
import MovIndeferida from './Pages/MovIndeferida';
import CadaVizuMov from './Pages/CadaVizuMov';
import PlanoContas from './Pages/PlanoDeContas';
import PlanoCadastrarVisualizar from './Pages/PlanoCadastrarVisualizar';
import Escrituracao from './Pages/Escrituracao';
import EscrituracaoVizualizar from './Pages/EscrituracaoVisualizar';
import Dashboard from './Pages/Dashboard';
import './PagesCSS/App.css';

// Componente HOC para incluir o Header apenas nas páginas selecionadas
const WithHeader = ({ Component }) => (
  <>
    <Header />
    <Component />
  </>
);

function App() {
  return (
    <Router>
      <div className="content">
        <Routes>
          {/* Páginas com Header */}
          <Route path="/relatorios" element={<WithHeader Component={Relatorios} />} />
          <Route path="/movimentacao" element={<WithHeader Component={Movimentacao} />} />
          <Route path="/movimentacao/cadastrar" element={<WithHeader Component={CadastrarMovimentacao} />} />
          <Route path="/movimentacao/indeferidos" element={<WithHeader Component={MovIndeferida} />} />
          <Route path="/plano-de-contas" element={<WithHeader Component={PlanoContas} />} />
          <Route path="/plano-de-contas/cadastrar" element={<WithHeader Component={PlanoCadastrarVisualizar} />} />
          <Route path="/escrituracao" element={<WithHeader Component={Escrituracao} />} />
          <Route path="/escrituracao/visualizar" element={<WithHeader Component={EscrituracaoVizualizar} />} />

          {/* Páginas sem Header */}
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
