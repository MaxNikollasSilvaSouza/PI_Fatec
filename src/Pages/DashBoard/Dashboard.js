import React from "react";
import "./styled.css"
import { Button, Form } from 'react-bootstrap';
function Dashboard() {
    return (
        <>
            <div id="mother_div">
                <div id="caixas_cima">

                    <div id="cadastrar">
                        <table >
                            <tr className="tabela">
                                CADASTRAR - DESPESAS E RECEITAS
                            </tr>
                            <tr className="tabela">
                                <td className="tabela">
                                    FUNCIONÁRIO
                                </td>
                                <td className="tabela">
                                    FORNECEDORES
                                </td>
                                <td className="tabela">
                                    CLIENTES
                                </td>
                                <td className="tabela">
                                    CONTAS
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div id="espaco">
                        ...
                    </div>
                    <div id="gerar_relatorio">
                        <table >
                            <tr className="tabela">
                                GERAR RELATÓRIO
                            </tr>
                            <tr className="tabela">
                                <td className="tabela">
                                    DATA INICIAL: {/* */}
                                </td>
                                <td className="tabela">
                                    DATA FINAL: {/* */}
                                </td>
                                <td className="tabela">
                                    <Form.Select aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </td>


                            </tr>
                            <tr className="tabela">
                                <Button variant="success" id="botao">Acessar</Button>
                            </tr>
                        </table>

                    </div>


                </div>
                <div id="grafico">
                    sasa
                </div>
                <div id="grafico">
                    sasa
                </div>
            </div>
        </>
    );
}

export default Dashboard;
