import React, { useState } from 'react';
import '../styles/inputs.css';
// import validation from './validation.js';

const InputResetPassword = () => {
    const [user, setUser] = useState('')
    const [errors, setErrors] = useState({});
    const [buttonValid, setButtonValid] = useState(false);

    const handleUserInput = (e) => {
        setUser(e.target.value);

        if (e.target.value) {
            setButtonValid(true);
        } else {
            setButtonValid(false);
        }
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log("click")
    //     // setErrors(validation(user));
    // };

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
                        value={user}
                        onInput={handleUserInput}
                    />
                </div>
            </div>
            <div className="button">
                <form action="http://localhost:3000/linkSent">
                    <button type="submit" className={`button__resetPassword form-control ${(buttonValid && !errors.login) && "button_valid"}`}>Сменить пароль</button>
                </form>
            </div>
        </div>
    )
}

export { InputResetPassword };