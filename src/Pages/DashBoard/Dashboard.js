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

                <div id="titulografico">
                    <h3><u>Status Mensal</u></h3>
                    <div id="grafico">


                        <div class="piechart"></div>
                        <div id="grafdireito">
                            <Form.Select aria-label="Default select example">
                                <option>Janeiro</option>
                                <option value="1">Fevereiro</option>
                                <option value="2">Março</option>
                                <option value="3">Abril</option>
                                <option value="3">Maio</option>
                                <option value="3">Junho</option>
                                <option value="3">Julho</option>
                                <option value="3">Agosto</option>
                                <option value="3">Setembro</option>
                                <option value="3">Outubro</option>
                                <option value="3">Novembro</option>
                                <option value="3">Dezembro</option>

                            </Form.Select>
                            <div id="flex">
                                <div id="legenda1"></div>   RECEITA
                            </div>
                            <div id="flex">
                                <div id="legenda2">
                                </div>DESPESA</div>
                        </div>
                    </div>
                </div>
                <div id="branco">
                    .
                </div>
                <div id="titulografico">
                    <h3><u>Quantidade de Clientes</u></h3>
                    <div id="grafico">

                        <div class="vertical">

                            <div>
                                <div>50%</div>
                                <div class="gbarras" Style="height: 70px;"></div>
                                <div>Janeiro</div>
                            </div>
                            <div>
                                <div>10%</div>
                                <div class="gbarras" Style="height: 80px;"></div>
                                <div>Fevereiro</div>
                            </div>
                            <div>
                                <div> 150%</div>
                                <div class="gbarras" Style="height: 90px;"></div>
                                <div>Março</div>
                            </div>
                            <div>
                                <div>100%</div>
                                <div class="gbarras" Style="height: 100px;"></div>
                                <div>Abril</div>
                            </div>
                            <div>
                                <div>50%</div>
                                <div class="gbarras" Style="height: 110px;"></div>
                                <div>Maio</div>
                            </div>
                            <div>
                                <div>10%</div>
                                <div class="gbarras" Style="height: 120px;"></div>
                                <div>Junho</div>
                            </div>

                        </div>
                        <div id="ordemg2">
                            <div id="radiobutao">
                                <input type="radio" id="radio" name="fav_language" value="BIMESTRAL"></input>
                                <u><b>BIMESTRAL</b></u>
                            </div>
                            <br></br>
                            <div id="radiobutao">
                                <input type="radio" id="radio" name="fav_language" value="TRIMESTRAL"></input>
                                <u><b>TRIMESTRAL</b></u><br></br>
                            </div>
                            <br></br>
                            <div id="radiobutao">
                                <input type="radio" id="radio" name="fav_language" value="SEMESTRAL"></input>
                                <u><b>SEMESTRAL</b></u><br></br>
                            </div>
                            <br></br>
                            <div id="radiobutao">
                                <input type="radio" id="radio" name="fav_language" value="ANUAL"></input>
                                <u><b>ANUAL</b></u><br></br>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



        </>


    );
}

export default Dashboard;
