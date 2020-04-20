import React from 'react';
import ReactDOM from 'react-dom';
import { FiArrowRight, FiShoppingCart } from 'react-icons/fi';

import './style.css';
import noimg from '../../assets/no-img.png';

export default function Index(){
    const id_cliente = localStorage.getItem('IDCLIENTE');
    const cliente_name = localStorage.getItem('CLIENTE');
    const userNotLogged =   <div>
                                <li className="nav-session">
                                    <a href="/login">Login</a>
                                </li>
                                <li className="nav-session">
                                    <a href="/register">Register</a>
                                </li>
                            </div>;
    const userLogged =  <div className="user-area">
                            <div className="shopping-cart">
                                <FiShoppingCart size={20} color="B064FF" />
                            </div>
                            <div class="dropdown-user">
                                <span>{cliente_name}</span>
                                <div class="dropdown-user-content">
                                    <a href="/" onClick={handleExit}>Sair</a>
                                </div>
                            </div>
                        </div>
                        ;


    function sessionControl(){
        if(!id_cliente){
            ReactDOM.render(userNotLogged,document.getElementById('session-control'));
        }else{
            ReactDOM.render(userLogged,document.getElementById('session-control'));
        }
    }

    async function handleExit(){
        await localStorage.removeItem('IDCLIENTE');
        await localStorage.removeItem('CLIENTE');
        await document.location.reload(true);
    }
    return(
        <div onLoad={sessionControl}>
        <nav className="navbar">
            <ul>
                <li className="nav-logo">
                    <a href="/">IFATACADISTA</a>
                </li>
                <div className="nav-items">
                    <li className="nav-item">
                        <a href="/">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Produtos</a>
                    </li>
                    <li className="nav-item">
                    <div class="dropdown">
                        <span>Categorias</span>
                        <div class="dropdown-content">
                            <a href="/">Roupas</a>
                            <a href="/">Roupas</a>
                            <a href="/">Roupas</a>

                        </div>
                    </div>
                    </li>
                    <li className="nav-item">
                        <a href="/">Sobre</a>
                    </li>
                </div>
                <div className="sessions-link">
                    <div className="nav-search">
                            <form>
                                <input type="search" placeholder="Pesquisar"/>
                            </form>
                    </div>
                    <div className="session-control" id="session-control">
                    </div>
                </div>
            </ul>
        </nav>
        <div className="indicator-content">
            <a href="/">
                <p>Ofertas Rápidas</p>
                <FiArrowRight size={18} color="#FFF" />
            </a>
        </div>
        <div className="content">
            <div>
                <p>Item</p>
                <span>Descrição</span>
                <img className="item-img" src={noimg} alt="Imagem teste"/>
                <section>
                    <span>ValorR$</span>
                    <button type="submit">Adicionar ao carrinho</button>
                </section>
            </div>
            <div>
                <p>Item</p>
                <span>Descrição</span>
                <img className="item-img" src={noimg} alt="Imagem teste"/>
                <section>
                    <span>ValorR$</span>
                    <button type="submit">Adicionar ao carrinho</button>
                </section>
            </div>
            <div>
                <p>Item</p>
                <span>Descrição</span>
                <img className="item-img" src={noimg} alt="Imagem teste"/>
                <section>
                    <span>ValorR$</span>
                    <button type="submit">Adicionar ao carrinho</button>
                </section>
            </div>
            <div>
                <p>Item</p>
                <span>Descrição</span>
                <img className="item-img" src={noimg} alt="Imagem teste"/>
                <section>
                    <span>ValorR$</span>
                    <button type="submit">Adicionar ao carrinho</button>
                </section>
            </div>
        </div>
        <div className="indicator-content-2">
            <a href="/">
                <p>Ainda em desenvovimento</p>
                <FiArrowRight size={18} color="#FFF" />
            </a>
        </div>
        </div>
    );
}