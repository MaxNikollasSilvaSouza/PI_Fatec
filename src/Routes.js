import React from "react";
import { Route, Routes } from 'react-router-dom'

export default () =>
{
    return(
   
            
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<LoginPage/>}/>
            </Routes>
      
    );
}