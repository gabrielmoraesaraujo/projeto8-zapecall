import {BrowserRouter, Routes, Route} from "react-router-dom"
import Inicio from './components/Inicio';
import Questions from "./components/Questions";

import "./assets/reset.css";
import "./assets/style.css";


export default function App(){


    return (
                <BrowserRouter>
               
                    <Routes>
                        <Route path="/" element={ <Inicio />} />
                        <Route path="/questions" element={ <Questions />} />
                    </Routes>                 
                </BrowserRouter>
    );  
}



    
   