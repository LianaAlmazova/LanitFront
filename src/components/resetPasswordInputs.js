import React, { useState } from 'react';
import "../styles/inputs.css";
import validationResetPassword from "./validationResetPassword.js";

const ResetPasswordInputs = () => {

    const [values, setValues] = useState({
        login: "",
        password: "",
        comfirmPassword: "",
        secretPassword: ""
    });
    const [errors, setErrors] = useState({});
    const [buttonValid, setButtonValid] = useState(false); 

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });

        setErrors({});

        if (values.login && values.password && values.comfirmPassword && values.secretPassword) {
            setButtonValid(true);
        } else {
            setButtonValid(false);
        }
    };

    const formSubmit = (event) => {
        event.preventDefault();
        setErrors(validationResetPassword(values));
    };

    return (
        <div>
            <div className="inputs">
                <div>
                    {((errors.login || errors.password) && !errors.comfirmPassword) && <p className="error error_secondLog">{errors.password}</p>}
                    {errors.comfirmPassword && <p className="error error_secondLog">{errors.comfirmPassword}</p>}
                    <div className="title_login">
                        Введи логин или корпоративный e-mail
                    </div>
                    <div className= {`inputs__box form-control ${((errors.login || errors.password) && !errors.comfirmPassword) && "invalid"}`}>
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
                        Введи новый пароль
                    </div>
                    <div className={`inputs__box form-control ${(errors.login || errors.password) && "invalid"}`}>
                        <input
                            className="inputs__cell password"
                            type="password"
                            placeholder="Новый пароль"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <div className="title_password">
                        Повтори новый пароль
                    </div>
                    <div className={`inputs__box form-control ${(errors.login || errors.password) && "invalid"}`}>
                        <input
                            className="inputs__cell password"
                            type="password"
                            placeholder="Новый пароль"
                            name="comfirmPassword"
                            value={values.comfirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <div className="title_password">
                        Введи секретный пароль
                    </div>
                    <div className="inputs__box">
                        <input
                            className="inputs__cell inputs__number"
                            type="number"
                            placeholder="Секретный пароль"
                            name="secretPassword"
                            value={values.secretPassword}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="button">
                <form>
                    <button className={`button__resetPassword form-control ${(buttonValid && !errors.login && !errors.password && !errors.comfirmPassword) && "button_valid"}`} onClick={formSubmit}>Сменить пароль</button>
                </form>
            </div>
        </div>
    )
}

export { ResetPasswordInputs };