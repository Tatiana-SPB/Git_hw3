import { formattingDate } from './formattingDate.js'
const host = 'https://wedev-api.sky.pro/api/v2/tatiana-alekseeva'

const authToken = 'https://wedev-api.sky.pro/api/user'

export let token = ''

export const updateToken = (newToken) => {
    token = newToken
}

export let name = ''

export const setName = (newName) => {
    name = newName
}

export const fetchComments = () => {
    return fetch(host + '/comments')
        .then((response) => {
            if (response.status === 500) {
                throw new Error('Ошибка сервера')
            }

            if (!response.ok) {
                throw new Error('Не удалось загрузить комментарии')
            }
            return response.json()
        })
        .then((data) => {
            const containerComments = data.comments.map((comment) => {
                return {
                    name: comment.author.name,
                    date: formattingDate(comment.date),
                    text: comment.text,
                    likes: comment.likes,
                    isLiked: false,
                }
            })

            return containerComments
        })
        .catch((error) => {
            if (error.message === 'Failed to fetch') {
                alert('Нет интернета, попробуйте снова')
            }
        })
}

export const postComment = (text, name) => {
    return fetch(host + '/comments', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            text,
            name,
        }),
    }).then((response) => {
        if (response.status === 500) {
            throw new Error('Ошибка сервера')
        }

        if (response.status === 400) {
            throw new Error('Неверный запрос')
        }
    })
    /*        .then(() => {
            return fetchComments()
        })*/
}

export const login = (login, password) => {
    return fetch(authToken + '/login', {
        method: 'POST',
        body: JSON.stringify({
            login: login,
            password: password,
        }),
    })
}

export function registration(login, name, password) {
    return fetch(authToken, {
        method: 'POST',
        body: JSON.stringify({
            login: login,
            name: name,
            password: password,
        }),
    })
}
