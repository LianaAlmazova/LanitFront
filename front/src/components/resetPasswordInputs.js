import React, { useState } from 'react';
import '../styles/inputs.css';
import '../styles/tooltips.css';
import validationResetPassword from './validationResetPassword.js';
import icon_v from './images/icon_v.png';
import icon_x from './images/icon_x.png';

const ResetPasswordInputs = () => {

    const [values, setValues] = useState({
        login: "",
        password: "",
        comfirmPassword: "",
        secretPassword: ""
    });
    const [errors, setErrors] = useState({});
    const [buttonValid, setButtonValid] = useState(false);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });

        setErrors({});

        if (values.login && values.password && values.comfirmPassword && values.secretPassword) {
            setButtonValid(true);
        } else {
            setButtonValid(false);
        }
    };

    //для tooltip
    const valid = (v_icon, inv_icon) => {
        let valid_icon = document.getElementById(v_icon);
        valid_icon.style.visibility = "visible";

        let invalid_icon = document.getElementById(inv_icon);
        invalid_icon.style.visibility = "hidden";
    }

    const invalid = (v_icon, inv_icon) => {
        let valid_icon = document.getElementById(v_icon);
        valid_icon.style.visibility = "hidden";

        let invalid_icon = document.getElementById(inv_icon);
        invalid_icon.style.visibility = 'visible';
    }

    const notDisplay = (v_icon, inv_icon) => {
        let valid_icon = document.getElementById(v_icon);
        valid_icon.style.visibility = "hidden";
        let invalid_icon = document.getElementById(inv_icon);
        invalid_icon.style.visibility = 'hidden';
    }

    let tooltipDisplay = document.getElementById("tooltip_container");
    console.log(tooltipDisplay);

    const tooltipBlur = (event) => {
        notDisplay("pass_tick_len", "pass_cross_len");
        notDisplay("pass_tick_up", "pass_cross_up");
        notDisplay("pass_tick_low", "pass_cross_low");
        notDisplay("pass_tick_num", "pass_cross_num");
        notDisplay("pass_tick_special", "pass_cross_special");
        notDisplay("pass_tick_space", "pass_cross_space");
        tooltipDisplay.style.visibility = "hidden";
    }

    const handleInput = (e) => {
        tooltipDisplay.style.visibility = "visible";
        let text = document.getElementsByTagName("input")[1];
        let pass = text.value;

        if (pass.length >= 8) {
            valid("pass_tick_len", "pass_cross_len");
        } else {
            invalid("pass_tick_len", "pass_cross_len");
        }

        const up = /[A-Z]/g;
        if (up.test(pass)) {
            valid("pass_tick_up", "pass_cross_up");
        } else {
            invalid("pass_tick_up", "pass_cross_up");
        }

        const low = /[a-z]/g;
        if (low.test(pass)) {
            valid("pass_tick_low", "pass_cross_low");
        } else {
            invalid("pass_tick_low", "pass_cross_low");
        }

        const num = /[0-9]/g;
        if (num.test(pass)) {
            valid("pass_tick_num", "pass_cross_num");
        } else {
            invalid("pass_tick_num", "pass_cross_num");
        }

        const special = /[!@#$%^&*]/g;
        if (special.test(pass)) {
            valid("pass_tick_special", "pass_cross_special");
        } else {
            invalid("pass_tick_special", "pass_cross_special");
        }

        const space = /[ ]/g;
        if (!space.test(pass)) {
            valid("pass_tick_space", "pass_cross_space");
        } else {
            invalid("pass_tick_space", "pass_cross_space");
        }
    };

    const formSubmit = (e) => {
        e.preventDefault();
        setErrors(validationResetPassword(values));
    };

    return (
        <div>
            <div className={`form-control ${values.password && "tooltipOn"}`}>
                <div id="tooltip_container" className="tooltip">
                    <div className="tooltiptext">
                        <div className="tooltip_row">
                            <div className="icon_container">
                                <img src={icon_v} alt="icon tick" id="pass_tick_len" className="icon icon_tick" />
                                <img src={icon_x} alt="icon cross" id="pass_cross_len" className="icon icon_cross" />
                            </div>
                            <p>не менее 8 символов</p>
                        </div>
                        <div className="tooltip_row">
                            <div className="icon_container">
                                <img src={icon_v} alt="icon tick" id="pass_tick_up" className="icon icon_tick" />
                                <img src={icon_x} alt="icon cross" id="pass_cross_up" className="icon icon_cross" />
                            </div>
                            <p>заглавные буквы</p>
                        </div>
                        <div className="tooltip_row">
                            <div className="icon_container">
                                <img src={icon_v} alt="icon tick" id="pass_tick_low" className="icon icon_tick" />
                                <img src={icon_x} alt="icon cross" id="pass_cross_low" className="icon icon_cross" />
                            </div>
                            <p>строчные буквы</p>
                        </div>
                        <div className="tooltip_row">
                            <div className="icon_container">
                                <img src={icon_v} alt="icon tick" id="pass_tick_num" className="icon icon_tick icon_ticknum" />
                                <img src={icon_x} alt="icon cross" id="pass_cross_num" className="icon icon_cross" />
                            </div>
                            <p>минимум 1 цифра</p>
                        </div>
                        <div className="tooltip_row">
                            <div className="icon_container">
                                <img src={icon_v} alt="icon tick" id="pass_tick_special" className="icon icon_tick" />
                                <img src={icon_x} alt="icon cross" id="pass_cross_special" className="icon icon_cross" />
                            </div>
                            <p>минимум 1 специальный символ</p>
                        </div>
                        <div className="tooltip_row">
                            <div className="icon_container">
                                <img src={icon_v} alt="icon tick" id="pass_tick_space" className="icon icon_tick" />
                                <img src={icon_x} alt="icon cross" id="pass_cross_space" className="icon icon_cross" />
                            </div>
                            <p>нельзя использовать пробел</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="inputs">
                <div>
                    {((errors.login || errors.password) && !errors.comfirmPassword) && <p className="error error_secondLog">{errors.password}</p>}
                    {errors.comfirmPassword && <p className="error error_secondLog">{errors.comfirmPassword}</p>}
                    <div className="title_login">
                        Введи логин или корпоративный e-mail
                    </div>
                    <div className={`inputs__box form-control ${((errors.login || errors.password) && !errors.comfirmPassword) && "invalid"}`}>
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
                            onInput={handleInput}
                            onBlur={tooltipBlur}
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
                            onInput={handleChange}
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