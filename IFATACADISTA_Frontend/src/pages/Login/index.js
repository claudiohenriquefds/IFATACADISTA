import React from 'react';
import { FiUser, FiLock } from 'react-icons/fi';

import './style.css';

export default function Login(){
    return(
        <div className="container-login">
            <form>
                <h1>Bem Vindo</h1>
                <div className="input-with-icons">
                    <FiUser size={20} color="#696969"/><input type="email" placeholder="Insira o seu email"/>
                </div>
                <div className="input-with-icons">
                    <FiLock size={20} color="#696969"/><input type="password" placeholder="Insira o sua senha"/>
                </div>
                <div>
                    <a href="#">Esqueceu a senha?</a>
                    <a href="/register">Não está cadastrado?</a>
                </div>
                <button type="submit">Logar</button>
            </form>
        </div>
    );
}