import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import './style.css';

export default function Login(){
    const [emailLogin,setEmailLogin] = useState('');
    const [passwordLogin,setPasswordLogin] = useState('');
    const [notification,setNotification] = useState('');
    const [valueOfRequisition,setValueOfRequisition] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('login', { emailLogin, passwordLogin });
            setNotification('notification');
            setValueOfRequisition(response.data);
            setTimeout(function(){
                setNotification('');
                setValueOfRequisition('');
                if(response.status === 'Logado com sucesso'){
                    // localStorage.setItem('ClienteID',id);
                    history.push('/');
                }
            },9000);
        }catch(err){
            setNotification('notification');
            setValueOfRequisition('Algo deu errado no login, tente novamente. ' + err);
            setTimeout(function(){
                setNotification('');
                setValueOfRequisition('');
            },9000);
        }
    }
    return(
        <div className="container-login">
            <form onSubmit={handleLogin}>
                <h1>Bem Vindo</h1>
                <div className="input-with-icons">
                    <FiMail size={20} color="#696969"/>
                    <input 
                        type="email" 
                        placeholder="Insira o seu email"
                        value={emailLogin}
                        onChange={e=>setEmailLogin(e.target.value)}    
                    />
                </div>
                <div className="input-with-icons">
                    <FiLock size={20} color="#696969"/>
                    <input 
                        type="password" 
                        placeholder="Insira o sua senha"
                        value={passwordLogin}
                        onChange={e=>setPasswordLogin(e.target.value)}
                    />
                </div>
                <div>
                    <a href="/">Esqueceu a senha?</a>
                    <a href="/register">Não está cadastrado?</a>
                </div>
                <button type="submit">Logar</button>
                <div className="return">
                    <FiArrowLeft size={18} color="#696969"/><a href="/">Voltar ao inicio</a>
                </div>
            </form>
            <div className={notification}>
                <p>{valueOfRequisition}</p>
            </div>
        </div>
    );
}