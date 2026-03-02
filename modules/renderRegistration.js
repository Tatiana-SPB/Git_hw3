import { registration, updateToken } from './api.js'
import { fetchAndRenderComments } from './fetchAndRenderComments.js'

export const renderRegistration = () => {
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
                id="name-input"
                class="input"
                placeholder="Имя"/>
            <input
                type="text"
                id="password-input"
                class="input"
                placeholder="Пароль"/>
    </div>
    <br />
    <button type="button" id="reg-button">Зарегистрироваться</button>
    <div class="login-loading" style="display: none; margin-top: 20px">Создание нового пользователя...</div>
    </div>
    `
    const button = document.getElementById('reg-button')
    const loginEl = document.getElementById('login-input')
    const nameEl = document.getElementById('name-input')
    const passwordEl = document.getElementById('password-input')

    button.addEventListener('click', () => {
        button.disabled = true
        document.querySelector('.login-loading').style.display = 'block'

        registration({
            login: loginEl.value,
            name: nameEl.value,
            password: passwordEl.value,
        }).then((data) => {
            updateToken(data.user.token)
            fetchAndRenderComments()
        })
    })
}
