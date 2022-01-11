import React from "react";
import {Link} from 'react-router-dom';

import EstruturaPagina from "../EstruturaPagina";
import './HomePage.css'

const Homepage = () =>{
    return(
        <div>
            <EstruturaPagina>
                <header className='cabecalho'>
                    <div className='cabecalho-titulos'>
                        <h1>Os melhores <strong>aparelhos dentários</strong></h1>
                        <p>Confira abaixo todas as especialidades odontológicas que temos à sua
                            disposição!</p>
                    </div>

                    <div className='cabecalho-especialidades'>
                        <div className='container-especialidades'>
                            <div className='especialidades-item'>
                                <img src='../assets/dente.png' alt='ícone do dente'></img>
                                <p>Pré-avaliação</p>

                            </div>

                            <div className='especialidades-item'>
                                <img src='../assets/dente.png' alt='ícone do dente'></img>
                                <p>Raio-x digital</p>

                            </div>
                        </div>
                        <div className='container-especialidades'>
                            <div className='especialidades-item'>
                                <img src='../assets/dente.png' alt='ícone do dente'></img>
                                <p>Aparelhos dentários</p>

                            </div>

                            <div className='especialidades-item'>
                                <img src='../assets/dente.png' alt='ícone do dente'></img>
                                <p>Clareamento dental</p>

                            </div>
                        </div>
                    </div>
                </header>

                <main>
                    <section className='beneficios'>
                        <div className='beneficios-titulo'>
                            <h2>Por que usar <strong>aparelho</strong>?</h2>
                            <img src='../assets/aparelho.png' alt='Imagem de um aparelho'></img>
                        </div>

                        <ul className='beneficios-lista'>
                            <li className='beneficios-item'>
                                <h3>Alinhar os dentes</h3>
                                <p>Dentes desalinhados causam problemas nos dentes e podem afetar a digestão dos alimentos e a respiração.</p>
                            </li>

                            <li className='beneficios-item'>
                                <h3>Melhorar a dicção e a higiene dentária</h3>
                                <p>Muitas pessoas não conseguem nem usar fio dental devido à posição da sua dentição. Contudo, a correção possibilita o cuidado com a saúde bucal de forma bem mais ampla.</p>
                            </li>

                            <li className='beneficios-item'>
                                <h3>Corrigir espaço entre os dentes</h3>
                                <p>Uma dentição desalinhada e com espaços significativos incomodam muitas pessoas. Usar aparelho nos dentes é uma das formas mais eficientes para que esses problemas possam ser corrigidos.</p>
                            </li>
                        </ul>
                    </section>

                    <section className='depoimentos'>
                        <h2>Veja o que os nossos <strong>clientes</strong> estão dizendo</h2>
                        <div className='depoimentos box'>
                            <div className='depoimentos card'>
                                <img className='depoimentos-card-img' src='../assets/cliente01.png' alt='Foto do cliente 1'></img>
                                <h4>Alberto</h4>
                                <p>Usei aparelho por 2 anos e agora posso sorrir novamente.</p>
                            </div>

                            <div className='depoimentos card'>
                                <img className='depoimentos-card-img' src='../assets/cliente02.png' alt='Foto do cliente 1'></img>
                                <h4>Eliana</h4>
                                <p>Meus dentes eram espaçados e depois de 1 ano estão no lugar certo.</p>
                            </div>

                            <div className='depoimentos card'>
                                <img className='depoimentos-card-img' src='../assets/cliente03.png' alt='Foto do cliente 1'></img>
                                <h4>Carla</h4>
                                <p>Começei a usar ano passado e já estou notando a diferença.</p>
                            </div>                        
                        </div>
                        <Link to='/contato' className='botao'>Entre em contato</Link>

                    </section>
                </main>
            </EstruturaPagina>
        </div>
    )
    

}

export default Homepage;

