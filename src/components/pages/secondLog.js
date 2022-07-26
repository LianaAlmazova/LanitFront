import { Header } from '../header'
import { InputsSecondLog } from '../inputsSecondLog'

const SecondLog = () => {
    return (
        <div className="App">
            <div className="container">
                < Header />
                < InputsSecondLog />
            </div>
            <div className="forgotPassword">
                <a href='./resetPassword' className="forgotPassword">О нет! Я забыл пароль!</a>
            </div>
        </div>
    )
}

export { SecondLog };