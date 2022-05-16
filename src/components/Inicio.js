import React from "react";
import {Link} from "react-router-dom"

import logo from "../assets/logo.png";


export default function Inicio(){
    return(
        <div className="inicio">
        <img src={logo} alt="ZapRecall"/>
        <div className="tittle">ZapRecall</div>
        <Link
                      to="/questions"
                      className="botao-iniciar"
                    >
                      Iniciar Recall!
                    </Link>
        </div>
        );
}

