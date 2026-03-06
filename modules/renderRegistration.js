import { registration, updateToken, setName } from './api.js'
import { fetchAndRenderComments } from './fetchAndRenderComments.js'
import { renderLogin } from './renderLogin.js'

export const renderRegistration = () => {
    const container = document.querySelector('.container')

    const loginHtml = `
    <section class="add-form">
        <h1>Форма регистрации</h1>
            <input
                type="text"
                class="add-form-name"
                id="login"
                placeholder="Логин"
                required
            ></input>
            <input
                type="text"
                class="add-form-name"
                id="name"
                placeholder="Имя"
                required
            ></input>
            <input
                type="password"
                id="password"
                class="add-form-name"
                placeholder="Пароль"
                required
            ></input>
            <fieldset class="add-form-registry">
    <button class="add-form-button-main button-main" type="submit" id="reg-button">Зарегистрироваться</button>
    <u class="add-form-button-link button-main entry">Войти</u>
            </fieldset>
    <div class="login-loading" style="display: none; margin-top: 20px">Осуществляем вход...</div>
</section>
    `

    container.innerHTML = loginHtml

    document.querySelector('.entry').addEventListener('click', () => {
        renderLogin()
    })

    const button = document.getElementById('reg-button')
    const nameEl = document.getElementById('name')
    const loginEl = document.getElementById('login')
    const passwordEl = document.getElementById('password')

    button.addEventListener('click', () => {
        //button.disabled = true
        //document.querySelector('.login-loading').style.display = 'block'

        registration(loginEl.value, nameEl.value, passwordEl.value)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                updateToken(data.token)
                setName(data.name)
                fetchAndRenderComments()
            })
    })
}
