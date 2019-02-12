import React, { Component } from 'react';
import Logo from './../../Logo.png';
import './Header.scss';

class Header extends Component {
    state = {  }
    render() {
        return (
            <header className="header">
                <img src={Logo} />
            </header>
        );
    }
}

export default Header;
