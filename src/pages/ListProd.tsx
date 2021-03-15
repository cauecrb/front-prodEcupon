import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import api from '../services/api';


import '../styles/pages/listprod.css'

interface Produtos{
    id:number;
    nome:string;
    descricao:string;
    valor:number;
    cupons:number;
}

function ListProd() {
    const [produtos, setProdutos] = useState<Produtos[]>([]);
    
    useEffect(() =>{
        api.get('produtos').then(response => {
            console.log(response);
            setProdutos(response.data);
        })
    },[])

    return(
        <div>
            <h1> Estes são nossos produtos </h1>

            <div className="visualizar-prod" > 
                {produtos.map(produtos => {
                    return(
                        <Link id="form-cadas" 
                            to={`/prod/${produtos.id}`}
                            className="prod-select"
                            key={produtos.id}>
                                <h3>Produto: {produtos.nome}</h3>
                                <p>descrição: {produtos.descricao}</p>
                                <p>Preço: {produtos.valor}</p>
                                <p>cupo de desconto: {produtos.cupons}</p>
                        </Link>
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

export default ListProd;