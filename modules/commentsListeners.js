import { commentBox } from './commentBox.js'

export const commentsListeners = () => {
    const addFormTextEl = document.querySelector('.add-form-text')

    const comments = document.querySelectorAll('li')

    for (const comment of comments) {
        comment.addEventListener('click', () => {
            const counterComment = commentBox[comment.dataset.index]
            addFormTextEl.value = `Пользователь ${counterComment.name} сказал: "${counterComment.text}".`
        })
    }
}
