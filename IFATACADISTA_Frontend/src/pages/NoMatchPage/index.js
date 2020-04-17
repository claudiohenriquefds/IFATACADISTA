import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';

export default function NoMatchPage(){
    return(
        <div className="content-not-found">
            <section>
                <h1>404</h1>
                <p>A página não foi encontrada, volte a suas compras :)</p>
                <div className="return-404">
                    <FiArrowLeft size={18} color="#696969"/><a href="/">Voltar ao inicio</a>
                </div>
            </section>
        </div>
    );
}