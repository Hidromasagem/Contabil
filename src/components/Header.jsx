import React from 'react';
import { Link } from 'react-router-dom';
import '../PagesCSS/Header.css'

function Header() {
  return (
    <header className="header">
      <nav className="menu">
        <Link to="/relatorios" className="botoes">Relatórios</Link>
        <Link to="/movimentacao" className="botoes">Movimentação</Link>
        <Link to="/plano-de-contas" className="botoes">Plano de Contas</Link>
        <Link to="/escrituracao" className="botoes">Escrituração</Link>
      </nav>

    </header>
  );
}

export default Header;
