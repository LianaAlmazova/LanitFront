import React, { useState } from 'react';
import '../styles/inputs.css';

import { useDispatch } from 'react-redux';
import { logIn } from '../features/auth/authSlice';
import { useLoginMutation } from '../features/auth/authApiSlice';


export const InputsSecondLog = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({});
    const [errMsg, setErrMsg] = useState({});
    const [buttonValid, setButtonValid] = useState(false);
    const [loadingValid, setLoadingValid] = useState(false);

    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();

    const handleUserInput = (e) => setUser(e.target.value);
    const handlePasswordInput = (e) => setPassword(e.target.value);

    const loadingSpinner = (spin, text, param) => {
        let spinner = document.getElementById(spin);
        let btn_text = document.getElementById(text);

        if (param === "on") {
            btn_text.style.visibility = "hidden";
            spinner.style.visibility = "visible";
        } else if (param === "off") {
            btn_text.style.visibility = "visible";
            spinner.style.visibility = "hidden";
        }
    };

    const handleChange = (e) => {
        if (user && password) {
            setButtonValid(true);
        } else {
            setButtonValid(false);
        }

        setLoadingValid(true);
    };

    const formSubmit = async (e) => {
        e.preventDefault();

        try {
            const userData = await login({ user, password }).unwrap()
            dispatch(logIn({ ...userData, user }))
            setUser('')
            setPassword('')
        } catch (err) {
            if (!err?.originalStatus) {
                errors.password = "Неверный логин или пароль :("
                setErrMsg('No Server Response');
            } else if (err.originalStatus === 400) {
                errors.password = "Неверный логин или пароль :("
                setErrMsg('Missing Username or Password');
            } else if (err.originalStatus === 401) {
                errors.password = "Неверный логин или пароль :("
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
        }
    };

    if (loadingValid && isLoading) {
        loadingSpinner("spinner", "button__text", "on");
    } else if (loadingValid && !isLoading) {
        loadingSpinner("spinner", "button__text", "off");        
    }

    return (
        <div>
            <div className="inputs">
                {(errors.login || errors.password) && <p className="error error_secondLog">{errors.password}</p>}
                <div>
                    <div className="title_login">
                        Введи логин или корпоративный e-mail
                    </div>
                    <div className={`inputs__box form-control ${(errors.login || errors.password) && "invalid"}`}>
                        <input
                            className="inputs__cell login"
                            type="text"
                            placeholder="Логин или e-mail"
                            name="login"
                            value={user}
                            onChange={handleChange}
                            onInput={handleUserInput}
                        />
                    </div>
                </div>
                <div>
                    <div className="title_password">
                        Введи пароль из письма
                    </div>
                    <div className={`inputs__box form-control ${(errors.login || errors.password) && "invalid"}`}>
                        <input
                            className="inputs__cell password"
                            type="password"
                            placeholder="Пароль"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            onInput={handlePasswordInput}
                        />
                    </div>
                </div>
            </div>
            <div className="button__container">
                <svg id="spinner" className="spinner" viewBox="0 0 50 50">
                    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                </svg>
                <button className={`button__log form-control ${(buttonValid && !errors.login) && "button_valid"}`} onClick={formSubmit}>
                    <p id="button__text" className="button__text">Войти</p>
                </button>
            </div>
            <div className="forgotPassword">
                <a href='./resetPassword' className={`forgotPassword form-control ${(errors.login || errors.password) && "invalid_a"}`}>О нет! Я забыл пароль!</a>
            </div>
        </div>
    );
};
