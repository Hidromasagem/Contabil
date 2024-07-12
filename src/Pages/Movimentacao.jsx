import '../PagesCSS/Movimentacao.css';
import { Link } from 'react-router-dom';

function Movimentacao(){
    return(
        <> 
        <div className="menu_op"><h2>Movimentação contabil. </h2></div>             
            <div className="box_content">
                <div className="box">
                    <Link to="/movimentacao/cadastrar"> Cadastrar/Visualizar </Link>
                </div>
                <div className="box">
                    Indeferidos
                </div>
            </div>      
        </>
        )
} export default Movimentacao;