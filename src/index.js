import ReactDom from "react-dom";

function Teste(){

        //LÓGICA VAI AQUI


        //RENDERIZAÇÃO 

    return (
                <>
                    <Teste2/ >
                    <Teste3/ >
                </>
    );
}

function Teste2(){
    return(
            <li> Agora sei por funções como tag </li>
    );
}

function Teste3(){
    return(
            <li> Só falta separar em arquivos e importalos para o central (APP?) </li>
    );
}

    const teste = Teste();
    ReactDom.render(teste, document.querySelector(".root"));