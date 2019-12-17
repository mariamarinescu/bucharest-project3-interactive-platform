import React, { Component } from 'react';
import brand_romanesc from './brand-romanesc.png'
import produse_romanesti from './produse-romanesti.png';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div id='footer'>
                <div className='contact'>
                    <div>SC TECHIRGHIOL FARMA COSMETICS SRL</div>
                    <div>Nr. ord. Reg. com./aut.: J13-1885-2012</div>
                    <div>Cod inregistrare fiscala: RO30601045</div>
                    <div>Techir © Copyright 2020</div>
                    <hr id="f-line"/>
                    <div className='footer-links'>
                        <a href="https://anpc.ro/" className='anpc'>ANPC</a>
                        <a href="#" className='politica-de-confidentialitate'>Politica de Confidentialitate</a>
                    </div>
                </div>
                <img src={brand_romanesc} className='brand-romanesc' alt="brand_romanesc" />
                <img src={produse_romanesti} className='produse-romanesti' alt="produse_romanesti" />
            </div>
        );
    }
}
