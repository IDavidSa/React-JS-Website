import React from 'react'
import EstruturaPagina from '../EstruturaPagina'
import ContatoMapa from '../ContatoMapa'
import './Contato.css'

const Contato = () =>{
    return(
        <EstruturaPagina>
            <main className='contato'>
                <section className='horario-atendimento'>
                    <h2>Horarios de <strong>atendimento</strong></h2>
                    <div className='medicos box'>
                        <div className='medicos card'>
                            <img className='depoimentos-card-img' src='../assets/medico01.png' alt='Foto do cliente 1'></img>
                            <h4>Dr. Hélio</h4>
                            <p>Segundas, quartas e sextas das 09:00 às 16:00</p>
                        </div>

                        <div className='medicos card'>
                            <img className='depoimentos-card-img' src='../assets/medico02.png' alt='Foto do cliente 1'></img>
                            <h4>Dr. Carlos</h4>
                            <p>Terças e quintas das 13:00 às 18:00</p>
                        </div>  

                        <div className='medicos card'>
                            <img className='depoimentos-card-img' src='../assets/medico03.png' alt='Foto do cliente 1'></img>
                            <h4>Dra. Suzana</h4>
                            <p>Terças, quintas e sábados das 08:00 às 12:00</p>
                        </div>   

                    </div>
                </section>

                <section className='localizacao'>
                    <h2>Onde estamos <strong>localizados</strong>?</h2>
                    <address>Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro - RJ. CEP: 22775-904</address>
                    <ContatoMapa />

                </section>
            </main>
        </EstruturaPagina>
    )
    
}

export default Contato;