import { Header } from '../header'
import { InputResetPassword } from '../InputResetPassword'

const ResetPassword = () => {
    return (
        <div className="App">
            <div className="back_toSecondLog">
                <a href='./secondLog'>Назад</a>
            </div>
            <div className="container">
                < Header />
                <InputResetPassword />
                <div className="button">
                    <form>
                        <button className="button__resetPassword">Сменить пароль</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export { ResetPassword };