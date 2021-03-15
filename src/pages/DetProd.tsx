import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../services/api';

import '../styles/pages/listprod.css'

interface Produto{
    id:number;
    nome:string;
    descricao:string;
    valor:number;
    cupons:number;
}

interface ProdutoParams{
    id:string;
}

function DetProd() {
    const params = useParams<ProdutoParams>();
    const [produto, setProduto] = useState<Produto>();

    useEffect(() =>{
        api.get(`produto/${params.id}`).then(response => {
            console.log(response);
            setProduto(response.data);
        })
    },[params.id])

    if (!produto){
        return <p>Carregando ...</p>;
    }

    return(
        <div> Detalhes do produto 
            <div className="prod-detail">
                <h3>Produto: {produto.nome}</h3>
                <p>descrição: {produto.descricao}</p>
                <p>Preço: {produto.valor}</p>
                <p>cupo de desconto: {produto.cupons}</p>
            </div>

            <Link to="/prod" className="button-other-page">pagina de produtos</Link>
        </div>
    );

}

export default DetProd;