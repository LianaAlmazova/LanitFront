const validationResetPassword = (values) => {
    let errors = {};

    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(values.login).toLowerCase())) {
        errors.login = "Неверный логин или пароль :("
    } else {
        errors.login = ""
    }

    if (values.password.length < 8) {
        errors.password = "Неверный логин или пароль :("
    } else {
        errors.password = ""
    }

    if (values.comfirmPassword !== values.password) {
        errors.comfirmPassword = "Пароли не совпадают :("
    } else {
        errors.comfirmPassword = ""
    }

return errors;
}

export default validationResetPassword;