import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome To my rest Countries Website</h1>
            <nav>
                <a href="/hame">Hame</a>
                <a href="/countries">Countries</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;