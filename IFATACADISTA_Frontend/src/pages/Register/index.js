import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import { FiUser, FiLock, FiPhone, FiArrowLeft } from 'react-icons/fi';
import { FaFingerprint } from 'react-icons/fa'; 
import api from '../../services/api';
import './style.css';

export default function Register(){
    const [NomeUsuario,setNomeUsuario] = useState('');
    const [number,setNumber] = useState('');
    const [cpf,setCpf] = useState('');
    const [passwordUser,setPassword] = useState('');
    const [confirmpassword,setConfirmPassword] = useState('');
    const history = useHistory();
    
    async function handleRegister(e){
        e.preventDefault();

        if(passwordUser === confirmpassword){
            try{
                const response = await api.post('/register',{ NomeUsuario, number, cpf, passwordUser });
                console.log(response.data);
                if(response.data.result === 'Usuário cadastrado com sucesso'){
                    alert('Usuário cadastrado com sucesso');
                    localStorage.setItem('IDUSUARIO',response.data.id);
                    localStorage.setItem('USUARIO',response.data.usuario);
                    history.push('/index');
                }else{
                    alert('Erro ao cadastrar, tente novamente');
                }
            }catch(err){
                alert(err);
            }
        }else{
            document.getElementById('notVerify').style.visibility = 'unset';
        }

    }
    return(
        <div className="container-register">
            <form onSubmit={handleRegister}>
                <h1>Cadastre-se</h1>
                <div className="input-with-icons">
                    <FiUser size={20} color="#696969"/>
                    <input 
                        type="text" 
                        placeholder="Insira o nome"
                        value={NomeUsuario}
                        onChange={e=>setNomeUsuario(e.target.value)}
                    />
                </div>
                <div className="input-with-icons">
                    <FiPhone size={20} color="#696969"/>
                    <input 
                        type="text" 
                        placeholder="Insira o telefone"
                        value={number}
                        onChange={e=>setNumber(e.target.value)}
                    />
                </div>
                <div className="input-with-icons">
                    <FaFingerprint size={20} color="#696969"/>
                    <input 
                        type="number" 
                        placeholder="Insira o cpf"
                        value={cpf}
                        onChange={e=>setCpf(e.target.value)}
                    />
                </div>
                <div className="input-with-icons">
                    <FiLock size={20} color="#696969"/>
                    <input 
                        type="password" 
                        placeholder="Insira o sua senha"
                        value={passwordUser}
                        onChange={e=>setPassword(e.target.value)}
                    />
                </div>
                <div className="input-with-icons">
                    <FiLock size={20} color="#696969"/>
                    <input 
                        type="password" 
                        placeholder="Confirme sua senha"
                        value={confirmpassword}
                        onChange={e=>setConfirmPassword(e.target.value)}
                    />
                </div>
                <span id="notVerify" className="not-verify">As senhas não combinam</span>
                <div>
                    <a href="/">Termos</a>
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