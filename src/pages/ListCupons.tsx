import React, { FormEvent, useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import api from '../services/api';


import '../styles/pages/listprod.css'

interface Cupons{
    id:number;
    nome:string;
    descricao:string;
    valor:number;
    prod:number;
    eporcentagem:boolean;
}

function ListCupons() {
    const [cupons, setCupons] = useState<Cupons[]>([]);

    useEffect(() =>{
        api.get('cupons').then(response => {
            console.log(response);
            setCupons(response.data);
        })
    },[])

    const history = useHistory();


    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [eporcentagem, setEporcentagem] = useState(false);

// função para enviar os valores dos campos para o banco
    async function handleSubmit(event: FormEvent){
        event.preventDefault();
    
        const data = new FormData();
    
        data.append('nome', nome);
        data.append('descricao', descricao);
        data.append('valor', String(valor));
        data.append('eporcentagem', String(eporcentagem));
    
        await api.post('cupon', data)
    
        alert('cupon cadastrado com sucesso');
    
        history.push('/app');
      }

    return(
        <div>

            <h1>cadastrar cupons</h1>

            
                
                <form onSubmit={handleSubmit} className="create-cupon-form">
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
                        <label htmlFor="valor">Valor</label>
                        <input 
                            id="name" 
                            value={valor} 
                            onChange={
                                event => setValor(event.target.value)
                                } 
                        />
                        <label htmlFor="open_on_weekends">é um desconto em porcentagem?</label>

                    <div className="button-select">
                        <button 
                            type="button" 
                            className={
                            eporcentagem ? 
                                'active' : ''}
                                onClick={() => setEporcentagem(true)}
                        >
                        Sim
                        </button>
                        <button 
                            type="button"
                            className={
                            !eporcentagem? 
                                'active' : ''}
                            onClick={() => setEporcentagem(false)}
                        >
                        Não
                        </button>
                    </div>
                        
                </div>

                <button className="confirm-button" type="submit">
                cadastrar Cupon
                </button>
            </form>

            <h1> Estes são os cupons cadastrados </h1>

            <div className="visualizar-cupons" > 
               {cupons.map(cupons=> {
                   return(
                        <button id="form-cadas" 
                        className="cupon-select"
                        type="submit"
                        key={cupons.id}>
                                <h3>Cupon: {cupons.nome}</h3>
                                <p>descrição: {cupons.descricao}</p>
                                <p>Preço: {cupons.valor}</p>
                        </button>
                   )
               })}
            </div>

            <div>
                    <Link to="/adm">
                        <button type="submit" id="return">voltar</button>
                    </Link>
            </div>
        </div>
    );

}

export default ListCupons;