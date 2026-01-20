import { formattingDate } from './formattingDate.js'
const host = 'https://wedev-api.sky.pro/api/v1/tatiana-alekseeva'

export const fetchComments = () => {
    return fetch(host + '/comments')
        .then((response) => {
            return response.json()
        })
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
        })
}

export const postComment = (text, name) => {
    return fetch(host + '/comments', {
        method: 'POST',
        body: JSON.stringify({
            text,
            name,
        }),
    }).then(() => {
        return fetchComments()
    })
}
