import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

import './style.css';

export default function Index(){
    const [dpcliente, setDpCliente] = useState("d-none");
    const [dpproduto, setDpProduto] = useState("d-none");
    const [chevron, setChevron] = useState(<FiChevronDown className="icon-chevron" size={20} color="#fff"/>);

    function toggleDropdownCliente(){
        if(dpcliente === "d-none"){
            setDpCliente("d-block");
            setChevron(<FiChevronUp className="icon-chevron" size={20} color="#fff"/>);
        }else{
            setDpCliente("d-none");
            setChevron(<FiChevronDown className="icon-chevron" size={20} color="#fff"/>);
        }
    }
    function toggleDropdownPruduto(){
        if(dpproduto === "d-none"){
            setDpProduto("d-block");
            setChevron(<FiChevronUp className="icon-chevron" size={20} color="#fff"/>);
        }else{
            setDpProduto("d-none");
            setChevron(<FiChevronDown className="icon-chevron" size={20} color="#fff"/>);
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
                        {chevron}
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