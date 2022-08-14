import React, { useState } from 'react';
import { Header } from '../header/header.js'
import '../../styles/inputs.css';

const LinkSent = () => {
    return (
        <div className="App">
            <div className="back_toSecondLog">
                <a href='./resetPassword'>Назад</a>
            </div>
            <div className="container">
                < Header />
                <div className="inputs">
                    <div className="paragraph"> Ссылка для сброса пароля была отправлена на почту youremail@lanit-tercom.com</div>
                </div>
            </div>
        </div>
    )
}

export { LinkSent };