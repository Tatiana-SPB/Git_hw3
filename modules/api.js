//import { formattingDate } from './formattingDate.js'
const host = 'https://wedev-api.sky.pro/api/v2/tatiana-alekseeva'

const authToken = 'https://wedev-api.sky.pro/api/user'

let token = ''

export const updateToken = (newToken) => {
    token = newToken
}

export const fetchComments = () => {
    return (
        fetch(host + '/comments', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                if (response.status === 500) {
                    throw new Error('Ошибка сервера')
                }

                if (!response.ok) {
                    throw new Error('Не удалось загрузить комментарии')
                }
                return response.json()
            })
            /*
        .then((responseData) => {
            const appComments = responseData.comments.map((comment) => {
                return {
                    name: comment.author.name,
                    date: formattingDate(comment.date),
                    text: comment.text,
                    likes: comment.likes,
                    isLiked: false,
                }
            })

            return appComments
        })*/
            .catch((error) => {
                if (error.message === 'Failed to fetch') {
                    alert('Нет интернета, попробуйте снова')
                }
            })
    )
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

        if (response.status === 201) {
            return response.json()
        }
    })
    /*.then(() => {
            return fetchComments()
        })*/
}

export function login({ login, password }) {
    return fetch(`${authToken}/login`, {
        method: 'POST',
        body: JSON.stringify({
            login,
            password,
        }),
    }).then((response) => {
        return response.json()
    })
}

export function registration({ login, name, password }) {
    return fetch(authToken, {
        method: 'POST',
        body: JSON.stringify({
            login,
            name,
            password,
        }),
    }).then((response) => {
        return response.json()
    })
}
