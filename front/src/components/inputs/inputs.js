import React, { useState } from 'react';
import '../../styles/inputs.css';

import { useDispatch } from 'react-redux';
import { registerNewUser } from '../../features/register/registerSlice';
import { useRegisterMutation } from '../../features/register/registerApiSlice';

export const Inputs = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({});
    const [errMsg, setErrMsg] = useState({});
    const [buttonValid, setButtonValid] = useState(false);

    const [register] = useRegisterMutation();
    const dispatch = useDispatch();

    const handleUserInput = (e) => setUser(e.target.value);
    const handlePasswordInput = (e) => setPassword(e.target.value);

    const handleChange = (e) => {
        if (user && password) {
            setButtonValid(true);
        } else {
            setButtonValid(false);
        }
    };

    const formSubmit = async (e) => {
        e.preventDefault();
        // setErrors(validation(user, password));

        try {
            const userData = await register({ user, password }).unwrap()
            dispatch(registerNewUser({ ...userData, user }))
            setUser('')
            setPassword('')
        } catch (err) {
            if (!err?.originalStatus) {
                setErrMsg('No Server Response');
            } else if (err.originalStatus === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.originalStatus === 409) {
                errors.login = "Такой логин уже существует"
                setErrMsg('Conflict');
            } else {
                setErrMsg('Login Failed');
            }
        }
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
                            value={user}
                            onChange={handleChange}
                            onInput={handleUserInput}
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
                            value={password}
                            onChange={handleChange}
                            onInput={handlePasswordInput}
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
