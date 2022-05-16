import Inicio from './Inicio';
import Teste from './Tela2';
import {BrowserRouter, Routes, Route} from "react-router-dom"

export default function App(){

        //LÓGICA VAI AQUI


        //RENDERIZAÇÃO 

    return (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/Tela2" element={<Tela2 />} />
                    </Routes>                 
                </BrowserRouter>
    );
}



    
   