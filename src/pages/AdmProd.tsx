import React, { FormEvent, useState } from 'react';
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';
import api from '../services/api';


import '../styles/pages/listprod.css'

function AdmProd() {

    const history = useHistory();


    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [cupons, setCupons] = useState('');

// função para enviar os valores dos campos para o banco
    async function handleSubmit(event: FormEvent){
        event.preventDefault();
    
        const data = new FormData();
    
        data.append('nome', nome);
        data.append('descricao', descricao);
        data.append('valor', String(valor));
        data.append('cupon', String(cupons));
    
        await api.post('produto', data)
    
        alert('produto cadastrado com sucesso');
    
        history.push('/app');
      }

      // função para enviar os valores dos campos para o banco de cupons
    return(
        <div className="adm-page">
            <h1> Página de gerenciamento de produtos e cupons </h1>

            <main>
                <form onSubmit={handleSubmit} className="create-prod-form">

                        <div className="input-block">
                            <label htmlFor="nome">Nome</label>
                            <input 
                                id="name" 
                                value={nome} 
                                onChange={
                                    event => setNome(event.target.value)
                                } 
                            />
                            <label htmlFor="descricao">Descrição</label>
                            <input 
                                id="name" 
                                value={descricao} 
                                onChange={
                                    event => setDescricao(event.target.value)
                                } 
                            />
                            <label htmlFor="name">Valor</label>
                            <input 
                                id="name" 
                                value={valor} 
                                onChange={
                                    event => setValor(event.target.value)
                                } 
                            />
                        
                        </div>

                        <button className="confirm-button" type="submit">
                    cadastrar produto
                    </button>            
                </form>           

            <div>
                <Link to="/" className="button-other-page">
                    <button className="confirm-button" type="submit">
                    listar produtos
                    </button>
                </Link>
                <Link to="/cupons" className="button-other-page">
                    <button className="confirm-button" type="submit">
                    listar Cupons
                    </button>
                </Link>
            </div>
            </main>
        </div>
    );

}

export default AdmProd;