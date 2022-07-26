import React, { useState } from 'react';
import "../styles/inputs.css";

const InputResetPassword = () => {
    return (
        <div className="inputs">
            <div className="paragraph"> Введи свой логин или e-mail, и в течение 10 минут мы вышлем тебе на почту ссылку для смены пароля.</div>
            <div className="inputs__box">
                <input
                    className="inputs__cell login"
                    type="text"
                    placeholder="Логин или e-mail"
                    name="login"
                />
            </div>           
        </div>
    )
}

export { InputResetPassword };