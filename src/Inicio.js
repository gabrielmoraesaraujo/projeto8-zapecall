import {Link} from "react-router-dom"

import logo from "./assets/logo.png";


export default function Inicio(){
    return(
            <div className="inicio">
                <div className="box-inicio">
                    <img src={logo} alt="logo"/>
                    <div className="label"> ZapRecall</div>
                    <Link to="/Tela2">
                        <button className="button"> Iniciar Recall!</button>
                    </Link>
                    
                </div>

            </div>
        );
}

