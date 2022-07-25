import React from 'react';
import logo from '../images/logo.png';
import "../../styles/header.css";

export const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt="header logo" />
            </div>
            <div className="header__title">
                Цифровой офис
            </div>
        </div>
    );
};

