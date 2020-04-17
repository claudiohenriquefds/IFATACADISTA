import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import './style.css';
import noimg from '../../assets/no-img.png';

export default function Index(){
    return(
        <div>
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
                            <p>Roupas</p>
                            <p>Roupas</p>
                            <p>Camisolas</p>

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
                    <li className="nav-session">
                        <a href="/login">Login</a>
                    </li>
                    <li className="nav-session">
                        <a href="/register">Register</a>
                    </li>
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