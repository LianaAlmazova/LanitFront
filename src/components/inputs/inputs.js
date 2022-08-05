import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from "../../store/userSlice"
import "../../styles/inputs.css";
import validation from "../validation.js";

export const Inputs = () => {
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

    const dispatch = useDispatch();

    const formSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        
        localStorage.setItem('user', JSON.stringify(
            dispatch(
                setUser({
                    login: values.login,
                    password: values.password,
                    loggedin: true,
                })
            )
        ));
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
                <button type="submit" className={`button__log form-control ${(buttonValid && !errors.login) && "button_valid"}`} onClick={formSubmit}>Войти</button>
            </div>
        </div>
    );
};
