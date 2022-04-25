import React from "react";
import "./styled.css"
import InputGroup from 'react-bootstrap/InputGroup'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormControl } from "react-bootstrap";

function Clientes() {
    return (
        <>
            <div id="mother_div">
                <div className="pesquisa" id="campo_pesquisa">
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Lupinha</InputGroup.Text>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="Pesquisar..."
                        />

                    </InputGroup>
                    <Button variant="success" id="botao">Acessar</Button>
                </div>
                <div >
                    <table id="tabela">
                        <tr id="linha1">
                            DADOS - CLIENTES
                        </tr>

                        <tr>
                            
                            <td className="colunas">ID</td>
                            <td className="colunas">NOME</td>
                            <td className="colunas">CPF</td>
                            <td className="colunas">MENSALIDADE</td>
                            <td className="colunas">CATEGORIA</td>
                            <td className="colunas">DATA DE PAGAMENTO</td>
                            <td className="colunas">DATA DE CADASTRO</td>
                            <td className="colunas">OPÇÕES</td>
                        </tr>

                    {/*Aqui coloca os dados que serão gerados como no exemplo abaixo (pode apagar o exemplo)*/}
                    <tr>
                            
                            <td className="colunas">1</td>
                            <td className="colunas">Juvenau De Cruz</td>
                            <td className="colunas">123456789</td>
                            <td className="colunas">R$ 129,90</td>
                            <td className="colunas">Musculação</td>
                            <td className="colunas">12/11/2021</td>
                            <td className="colunas">15/10/2021</td>
                            <td className="colunas">Icone lapis e lixeira</td>
                        </tr>

                    </table>
                </div>
            </div>
        </>
    );
}

export default Clientes;