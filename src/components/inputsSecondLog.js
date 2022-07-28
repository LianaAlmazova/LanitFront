import React, { useState } from 'react';
import "../styles/inputs.css";
import validation from "./validation.js";

export const InputsSecondLog = () => {
    const [values, setValues] = useState({
        login: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [buttonValid, setButtonValid] = useState(false); 

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });

        setErrors({});

        if (values.login && values.password) {
            setButtonValid(true);
        } else {
            setButtonValid(false);
        }
    };

    const formSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    };

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
                            value={values.login}
                            onChange={handleChange}
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
                            value={values.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="button">
                <form>
                    <button className={`button__log form-control ${(buttonValid && !errors.login) && "button_valid"}`} onClick={formSubmit}>Войти</button>
                </form>
            </div>
            <div className="forgotPassword">
                <a href='./resetPassword' className={`forgotPassword form-control ${(errors.login || errors.password) && "invalid_a"}`}>О нет! Я забыл пароль!</a>
            </div>
        </div>
    );
};
