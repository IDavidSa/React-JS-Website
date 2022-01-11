import React from "react";
import { Link } from "react-router-dom";
import './topo.css'

export default function Topo(){
    return(
        <>
            <nav className='nav-bar'>
                <Link to='/' className='logo-box'>
                    <img src='../assets/dente.png' alt='logo de dente' />
                    <p>Dentes Saudáveis</p>
                </Link>
                
                <ul>
                    <li><Link to='/' className='botao'> Home </Link></li>
                    <li><Link to='/contato' className='botao'> Contato</Link></li>
                </ul>
            </nav>
        </>
    )

}