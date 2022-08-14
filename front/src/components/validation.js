const validation = (user, password) => {
    let errors = {};

    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(user).toLowerCase())) {
        errors.login = "Неверный логин или пароль :("
        
        if (!user) { //пока сделала появление ошибки при отсутствии введенных данных
            errors.login = "Такой логин уже существует"
        }
    } else {
        errors.login = ""
    }

    if (password.length < 8) {
        errors.password = "Неверный логин или пароль :("
    } else {
        errors.password = ""
    }

return errors;
}

export default validation;