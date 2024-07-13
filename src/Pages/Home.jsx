import '../PagesCSS/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <div className="square">
        <Link to="/relatorios">Relatórios</Link>
      </div>
      <div className="square">
        <Link to="/movimentacao">Movimentação</Link>
      </div>
      <div className="square">
        <Link to="/plano-de-contas/cadastrar">Plano de Contas</Link>
      </div>
      <div className="square">
        <Link to="/escrituracao">Escrituração</Link>
      </div>
      <div className="square">
        <Link to="/contadores">Contador</Link>
      </div>
      <div className="square">
        <Link to="/financeiro">Financeiro</Link>
      </div>
    </div>
  );
}

export default Home;
