import { login, updateToken, setName } from './api.js'
import { fetchAndRenderComments } from './fetchAndRenderComments.js'
import { renderRegistration } from './renderRegistration.js'

export const renderLogin = () => {
    const container = document.querySelector('.container')

    const loginHtml = `
    <section class="add-form">
        <h1>Форма входа</h1>
            <input
                type="text"
                class="add-form-name"
                id="login"
                placeholder="Логин"
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
    <button class="add-form-button-main button-main" type="submit" id="login-button">Войти</button>
    <u class="add-form-button-link button-main registry">Зарегистрироваться</u>
            </fieldset>
    <div class="login-loading" style="display: none; margin-top: 20px">Осуществляем вход...</div>
</section>
    `

    container.innerHTML = loginHtml

    document.querySelector('.registry').addEventListener('click', () => {
        renderRegistration()
    })

    const button = document.getElementById('login-button')
    const loginEl = document.getElementById('login')
    const passwordEl = document.getElementById('password')

    button.addEventListener('click', () => {
        //button.disabled = true
        //document.querySelector('.login-loading').style.display = 'block'

        login(loginEl.value, passwordEl.value)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                updateToken(data.user.token)
                setName(data.user.name)
                fetchAndRenderComments()
            })
    })
}
