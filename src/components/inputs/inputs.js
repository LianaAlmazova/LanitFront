import React, { useState } from 'react';
import "../../styles/inputs.css";
import validation from "../validation.js";

export const Inputs = () => {
    const [values, setValues] = useState({
        login: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const formSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    };

    return (
        <div>
            <div className="inputs">
                <div>
                    <div className="title_login">
                        Придумай логин
                    </div>
                    <div className={`inputs__box form-control ${errors.login && "invalid"}`}>
                        <input
                            className="inputs__cell login"
                            type="text"
                            placeholder="Новый логин"
                            name="login"
                            value={values.login}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.login && <p className="error">{errors.login}</p>}
                </div>
                <div>
                    <div className="title_password">
                        Введи пароль из письма
                    </div>
                    <div className="inputs__box">
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
                    <button className="button__log" onClick={formSubmit}>Войти</button>
                </form>
            </div>
        </div>
    );
};
