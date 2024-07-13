import "./EscrituracaoVisualizar"
import { Link } from "react-router-dom";
function Escrituracao(){
    return(
        <>
        
        <div className="menu_op"><h2>Escrituração Fiscal. </h2></div>             
            <div className="box_content">
                <div className="box">
                   <Link to="/escrituracao/visualizar">Visualizar</Link>

                </div>
                <div className="box">
                    
                </div>
            </div>
        </>
    )
}export default Escrituracao;