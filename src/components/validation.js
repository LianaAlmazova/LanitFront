const validation = (values) => {
    let errors = {};

    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(values.login).toLowerCase())) {
        errors.login = "Неверный логин или пароль :("
        
        if (!values.login) { //пока сделала появление ошибки при отсутствии введенных данных
            errors.login = "Такой логин уже существует"
        }
    } else {
        errors.login = ""
    }

    if (values.password.length < 8) {
        errors.password = "Неверный логин или пароль :("
    } else {
        errors.password = ""
    }

return errors;
}

export default validation;