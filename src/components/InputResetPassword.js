import React, { useState } from 'react';
import "../styles/inputs.css";
import validation from "./validation.js";

const InputResetPassword = () => {
    const [values, setValues] = useState({
        login: ""
    });

    const [errors, setErrors] = useState({});
    const [buttonValid, setButtonValid] = useState(false); 

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });

        setErrors({});

        if (values.login) {
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
                <div className="paragraph"> Введи свой логин или e-mail, и в течение 10 минут мы вышлем тебе на почту ссылку для смены пароля.</div>
                <div className="inputs__box">
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
            <div className="button">
                <form>
                    <button className={`button__resetPassword form-control ${(buttonValid && !errors.login) && "button_valid"}`} onClick={formSubmit}>Войти</button>
                </form>
            </div>
        </div>
    )
}

export { InputResetPassword };