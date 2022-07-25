const validation = (values) => {
    let errors={};

    if(!values.login){ //пока сделала появление ошибки при отсутствии введенных данных
        errors.login="Такой логин уже существует"
    }
    return errors;
}

export default validation;