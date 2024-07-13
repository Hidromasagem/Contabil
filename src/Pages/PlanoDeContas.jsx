import { Link } from 'react-router-dom';

function PlanoDeContas(){
    return(
            <> 
            <div className="menu_op"><h2>Plano de Contas </h2></div>             
                <div className="box_content">
                    <div className="box">
                        <Link to="/plano-de-contas/cadastrar"> Cadastrar/Visualizar </Link>
                    </div>
                    <div className="box">
                        Indeferidos
                    </div>
                </div>      
            </>
            )
}export default PlanoDeContas;