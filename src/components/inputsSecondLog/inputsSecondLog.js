import React, { useState } from 'react';
import "../../styles/inputs.css";
import validation from "../validation.js";

export const InputsSecondLog = () => {
    const [values, setValues] = useState({
        login: "",
        password: "",
    });

    const [errors, setErrors] = useState({}); 
    const [formValid, setFromValid] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const ChangeColor = (event) => {
        if (errors) { //для окрашивания кнопки войти в оранжевый цвет
            setFromValid(false);
        } else {
            setFromValid(true);
        }
    }

    const formSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    };

    return (
        <div>
            <div className="inputs">
                    <div>
                        <div className="title_login">
                            Введи логин или корпоративный e-mail
                        </div>
                        <div className={`inputs__box form-control ${errors.login && "invalid"}`}>
                            <input 
                                className="inputs__cell login" 
                                type="text" 
                                placeholder="Логин или e-mail" 
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
                    <button className={`button__log form-control ${setFromValid && "formValid"}`} onClick={formSubmit} onBlur={ChangeColor}>Войти</button>
                </form>
            </div>
        </div>
    );
};
