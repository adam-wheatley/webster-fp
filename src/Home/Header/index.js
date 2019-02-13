import React, { Component } from 'react';
import Logo from './../../Logo.png';
import './Header.scss';

class Header extends Component {
    state = {  }
    render() {
        return (
            <header className="header">
                <img className="header__logo" src={Logo} />
            </header>
        );
    }
}

export default Header;
