import React from "react";
import Rodape from "../Rodape";
import Topo from "../Topo";

const EstruturaPagina = (props) =>{
    return(
        <div>
            <Topo/>
            <div className='container'>
                {props.children}
            </div>
            <Rodape/>

        </div>
        

    )
}

export default EstruturaPagina;