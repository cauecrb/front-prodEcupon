import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/pages/listprod.css'

import '../styles/pages/Login.css';

function Login() {
    return(
        <div id="page-login">
            <aside>
                <Link to="/prod" className="button-other-page">pagina de produtos</Link>

            </aside>
            <div>
                <h1> digite seu email e sua senha </h1>

                <label>Seu Email</label>  
                <input type="text" id="emailform" name="emailform" placeholder="email"></input>
          
                <label>Sua senha</label>  
                <input type="text" id="SenhaForm" placeholder="senha"></input>

                <div>
                    <Link to="/adm">
                        <button type="submit" id="salvar">Entrar</button>
                    </Link>
                </div>
            </div>
        </div>
    );

}

export default Login;