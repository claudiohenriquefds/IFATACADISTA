import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiChevronDown, FiChevronUp, FiLogIn } from 'react-icons/fi'

import './style.css';

export default function Index(){
    const history = useHistory();

    const [dpcliente, setDpCliente] = useState("d-none");
    const [dpproduto, setDpProduto] = useState("d-none");
    const [chevronCliente, setChevronCliente] = useState(<FiChevronDown className="icon-chevron" size={20} color="#fff"/>);
    const [chevronProduto, setChevronProduto] = useState(<FiChevronDown className="icon-chevron" size={20} color="#fff"/>);

    function toggleDropdownCliente(){
        if(dpcliente === "d-none"){
            setDpCliente("d-block");
            setChevronCliente(<FiChevronUp className="icon-chevron" size={20} color="#fff"/>);
        }else{
            setDpCliente("d-none");
            setChevronCliente(<FiChevronDown className="icon-chevron" size={20} color="#fff"/>);
        }
    }
    function toggleDropdownPruduto(){
        if(dpproduto === "d-none"){
            setDpProduto("d-block");
            setChevronProduto(<FiChevronUp className="icon-chevron" size={20} color="#fff"/>);
        }else{
            setDpProduto("d-none");
            setChevronProduto(<FiChevronDown className="icon-chevron" size={20} color="#fff"/>);
        }
    }
    function handlelogout(){
        localStorage.removeItem('IDUSUARIO');
        localStorage.removeItem('USUARIO');
        history.push('/');
    }
    return(
        <div className="container-index">
            <div className="sidenav">
                <div>
                    <button onClick={toggleDropdownCliente} className="dropdown-btn">Clientes 
                        {chevronCliente}
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
                        {chevronProduto}
                    </button>
                    <div className="dropdown-container" id={dpproduto}>
                        <a href="/">Cadastrar Produto</a>
                        <a href="/">Visualiza Produto</a>
                        <a href="/">Alterar Produto</a>
                        <a href="/">Deletar Produto</a>
                    </div>
                </div>
            </div>
            <div onClick={handlelogout} className="exit-button">
                <p>Sair</p>
                <FiLogIn size={35} color="#696969"/>
            </div>
            <div className="container-main">
                <p>Hello World</p>
                <div className="icon-ifatacadista">

                </div>
                <span>Usuário</span>
            </div>
        </div>
    )
}