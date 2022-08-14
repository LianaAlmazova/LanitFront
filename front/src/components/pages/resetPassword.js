import { Header } from '../header/header.js'
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
            </div>
        </div>
    )
}

export { ResetPassword };