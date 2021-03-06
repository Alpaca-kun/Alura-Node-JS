import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo of Aluraflix" />
            </a>
            <a className="ButtonLink" href="/">New video</a>
        </nav>
    );

}

export default Menu;