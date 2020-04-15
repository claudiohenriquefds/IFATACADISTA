import React from 'react';
import { FiUser, FiLock, FiMail, FiPhone, FiArrowLeft } from 'react-icons/fi';

import './style.css';

export default function Register(){
    return(
        <div className="container-register">
            <form>
                <h1>Cadastre-se</h1>
                <div className="input-with-icons">
                    <FiUser size={20} color="#696969"/><input type="name" placeholder="Insira o nome"/>
                </div>
                <div className="input-with-icons">
                    <FiMail size={20} color="#696969"/><input type="email" placeholder="Insira o email"/>
                </div>
                <div className="input-with-icons">
                    <FiPhone size={20} color="#696969"/><input type="name" placeholder="Insira o telefone"/>
                </div>
                <div className="input-with-icons">
                    <FiLock size={20} color="#696969"/><input type="password" placeholder="Insira o sua senha"/>
                </div>
                <div className="input-with-icons">
                    <FiLock size={20} color="#696969"/><input type="password" placeholder="Confirme sua senha"/>
                </div>
                <div>
                    <a href="#">Termos</a>
                    <a href="/login">Já é cadastrado?</a>
                </div>
                <button type="submit">Cadastrar</button>
                <div className="return">
                    <FiArrowLeft size={18} color="#696969" /><a href="/">Voltar ao inicio</a>
                </div>
            </form>
        </div>
    );
}