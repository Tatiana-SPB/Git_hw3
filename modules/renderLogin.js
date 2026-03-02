import { login, updateToken } from './api.js'
import { fetchAndRenderComments } from './fetchAndRenderComments.js'
import { renderRegistration } from './renderRegistration.js'

export const renderLogin = () => {
    const app = document.getElementById('app')

    app.innerHTML = `
    <h1>Страница входа</h1>
    <div class="form">
        <h3 class="form-title">Форма входа</h3>
        <div class="form-row">
            <input
                type="text"
                id="login-input"
                class="input"
                placeholder="Логин"/>
            <input
                type="text"
                id="password-input"
                class="input"
                placeholder="Пароль"
            />
    </div>
    <br />
    <button type="button" id="login-button">Войти</button>
    <button type="button" id="reg-button">Зарегистрироваться</button>
    <div class="login-loading" style="display: none; margin-top: 20px">Осуществляем вход...</div>
    </div>
    `
    const button = document.getElementById('login-button')
    const loginEl = document.getElementById('login-input')
    const passwordEl = document.getElementById('password-input')

    button.addEventListener('click', () => {
        button.disabled = true
        document.querySelector('.login-loading').style.display = 'block'

        login({
            login: loginEl.value,
            password: passwordEl.value,
        }).then((responseData) => {
            updateToken(responseData.user.token)
            fetchAndRenderComments()
        })
    })

    const buttonReg = document.getElementById('reg-button')

    buttonReg.addEventListener('click', () => {
        renderRegistration()
    })
}
