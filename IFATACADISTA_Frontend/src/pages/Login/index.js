import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLock, FiArrowLeft } from 'react-icons/fi';
import { FaFingerprint } from 'react-icons/fa';
import api from '../../services/api';

import './style.css';

export default function Login(){
    const [cpfLogin,setCpfLogin] = useState('');
    const [passwordLogin,setPasswordLogin] = useState('');
    const [notification,setNotification] = useState('');
    const [valueOfRequisition,setValueOfRequisition] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('login', { cpfLogin, passwordLogin });
            if(response.data.result === 'Logado com sucesso'){
                localStorage.setItem('IDUSUARIO',response.data.id[0].idUsuario);
                localStorage.setItem('USUARIO',response.data.usuario[0].NomeUsuario);
                history.push('/index');
            }
            setNotification('notification');
            setValueOfRequisition(response.data.result);
            setTimeout(function(){
                setNotification('');
                setValueOfRequisition('');
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
                    <FaFingerprint size={20} color="#696969"/>
                    <input 
                        type="number" 
                        placeholder="Insira o seu cpf"
                        value={cpfLogin}
                        onChange={e=>setCpfLogin(e.target.value)}    
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