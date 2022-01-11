import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "../Contato";
import Homepage from "../HomePage";

const Rotas = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Homepage/>} />
                <Route exact path='/contato' element={<Contato/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;