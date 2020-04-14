import React from 'react';

import './style.css';

export default function Login(){
    return(
        <div className="container">
            <form>
                <h1>IFATACADISTA LOGO</h1>
                <input type="name" placeholder="Insira o seu usuário"/>
                <input type="password" placeholder="Insira o sua senha"/>
                <button type="submit">Logar</button>
            </form>
        </div>
    );
}