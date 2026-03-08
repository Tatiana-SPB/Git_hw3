import { registration, updateToken, setName } from './api.js'
import { fetchAndRenderComments } from './fetchAndRenderComments.js'
import { renderLogin } from './renderLogin.js'

export const renderRegistration = () => {
    const container = document.querySelector('.container')

    const regHtml = `
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
        <div class="login-loading" style="display: none; margin-top: 20px">Загружаю данные...</div>
    </section>
    `

    container.innerHTML = regHtml

    const button = document.getElementById('reg-button')
    const nameEl = document.getElementById('name')
    const loginEl = document.getElementById('login')
    const passwordEl = document.getElementById('password')

    document.querySelector('.entry').addEventListener('click', () => {
        renderLogin()
    })

    button.addEventListener('click', () => {
        if (!loginEl.value.trim() || !passwordEl.value.trim()) {
            alert('Заполните форму!')
            return
        }

        document.querySelector('.add-form-registry').style.display = 'none'
        document.querySelector('.login-loading').style.display = 'block'

        registration(loginEl.value, nameEl.value, passwordEl.value)
            .then((response) => {
                if (response.status === 400) {
                    loginEl.value.length <= 3 ||
                    nameEl.value.length <= 3 ||
                    passwordEl.value.length <= 6
                        ? alert(
                              'Введите данные пользователя длиной не меньше трех символов',
                          )
                        : alert('Пользователь с таким логином уже существует')
                }
                return response.json()
            })
            .then((data) => {
                updateToken(data.user.token)
                setName(data.user.name)
                fetchAndRenderComments()
                alert('Добро пожаловать!')
            })
            .catch((error) => {
                if (error.message === 'Failed to fetch') {
                    alert('Нет интернета, попробуйте снова')
                }

                if (error.message === 'Ошибка сервера') {
                    alert('Ошибка сервера')
                }

                loginEl.classList.add('-error')
                nameEl.classList.add('-error')
                passwordEl.classList.add('-error')

                setTimeout(() => {
                    loginEl.classList.remove('-error')
                    nameEl.classList.remove('-error')
                    passwordEl.classList.remove('-error')
                }, 2000)

                document.querySelector('.login-loading').style.display = 'none'
                document.querySelector('.add-form-registry').style.display =
                    'flex'
            })
    })
}
