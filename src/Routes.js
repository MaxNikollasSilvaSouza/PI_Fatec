import React from "react";
import Login from "./Pages/Login/Login";
import BaseDeDados from "./Pages/BaseDeDados/BaseDeDados";
import {Routes, Route} from 'react-router-dom';
import Clientes from "./Pages/BdD_cliente/Cliente";
import Relatorio from "./Pages/Relatorio/Relatorio";
import Dashboard  from "./Pages/DashBoard/Dashboard"


export default () =>
{
    return(
   
            
            <Routes>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/base" element={<BaseDeDados/>}/>
                <Route exact path="/cliente" element={<Clientes/>}/>
                <Route exact path="/relatorios" element={<Relatorio/>}/>
                <Route exact path="/dashboard" element={<Dashboard/>}/>
            </Routes>
      
    );
}