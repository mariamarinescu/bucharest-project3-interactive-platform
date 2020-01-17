import React from 'react';
import * as brand_romanesc from '../../../../assets/img/brand-romanesc.png';
import * as produse_romanesti from '../../../../assets/img/produse-romanesti.png';



class Footer extends React.Component {
    render() {
        return (
            <div id='footer'>
                <div className='contact'>
                    <div>SC TECHIRGHIOL FARMA COSMETICS SRL</div>
                    <div>Nr. ord. Reg. com./aut.: J13-1885-2012</div>
                    <div>Cod inregistrare fiscala: RO30601045</div>
                    <div>Techir © Copyright 2020</div>
                    <hr id="f-line" />
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


export default Footer;