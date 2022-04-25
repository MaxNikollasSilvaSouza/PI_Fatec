import React from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styled.css"


const BaseDeDados = () => {
    return (


        <div className="titulo">
            
            
            <div className="padrao">
                Base de Dados
            </div>
            <div className="padrao">
                
            <div>
                <Button variant="warning">Estatísticas</Button>   
                </div>             
                <div className="figura_nome">
                    <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600" />
                    <p className="textbt">Funcionário</p>
                </div>
                <div className="formatbt">
                <Button variant="success">Acessar</Button>
                </div>
            </div>
            <div className="padrao">
                <div>
                <Button variant="warning" >Estatísticas</Button> 
                </div>               
                <div className="figura_nome">
                    <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600" /><br/>
                    <p className="textbt">Fornecedor</p>
                </div>
                <div>
                <Button variant="success">Acessar</Button>
                </div>
            </div>

            <div className="padrao">
                <div>
                <Button variant="warning" >Estatísticas</Button> 
                </div>               
                <div className="figura_nome">
                    <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600" /><br/>
                    <p className="textbt">Cliente</p>
                </div>
                <div>
                <Button variant="success">Acessar</Button>
                </div>
            </div>
            <div className="padrao">
                <div>
                <Button variant="warning" >Estatísticas</Button>
                
                </div>                
                <div className="figura_nome">
                    <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600" /><br/>
                    <p className="textbt">Contas</p>
                </div>
                <div >
                <Button variant="success">Acessar</Button>
                
                </div>
            </div>
        </div>


    );
}

export default BaseDeDados;