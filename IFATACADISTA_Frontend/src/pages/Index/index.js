import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi'

import './style.css';

export default function Index(){
    const [dpcliente, setDpCliente] = useState("d-none");
    const [dpproduto, setDpProduto] = useState("d-none");

    function toggleDropdownCliente(){
        if(dpcliente === "d-none"){
            setDpCliente("d-block");
        }else{
            setDpCliente("d-none");
        }
    }
    function toggleDropdownPruduto(){
        if(dpproduto === "d-none"){
            setDpProduto("d-block");
        }else{
            setDpProduto("d-none");
        }
    }
    return(
        <div className="container-index">
            <div className="sidenav">
                <div>
                    <button onClick={toggleDropdownCliente} className="dropdown-btn">Clientes 
                        <FiChevronDown className="icon-chevron" size={20} color="#fff"/>
                    </button>
                    <div className="dropdown-container" id={dpcliente}>
                        <a href="/">Cadastrar Cliente</a>
                        <a href="/">Visualiza Cliente</a>
                        <a href="/">Alterar Cliente</a>
                        <a href="/">Deletar Cliente</a>
                    </div>
                </div>
                <div>
                    <button onClick={toggleDropdownPruduto} className="dropdown-btn">Produtos 
                        <FiChevronDown className="icon-chevron" size={20} color="#fff"/>
                    </button>
                    <div className="dropdown-container" id={dpproduto}>
                        <a href="/">Cadastrar Produto</a>
                        <a href="/">Visualiza Produto</a>
                        <a href="/">Alterar Produto</a>
                        <a href="/">Deletar Produto</a>
                    </div>
                </div>
            </div>
        </div>
    )
}