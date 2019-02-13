import React, { Component } from 'react';
import Logo from './../../Logo.png';
import './Header.scss';

class Header extends Component {
    state = {  }
    render() {
        return (
            <header className="header">
                <h1>WEBSTER</h1>
                <h2>FIRE PROTECTION</h2>
            </header>
        );
    }
}

export default Header;
