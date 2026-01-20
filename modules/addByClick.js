import { commentBox } from './commentBox.js'
import { renderComments } from './renderComments.js'
import { formattingInputValue } from './formattingInputValue.js'
import { formattingDate } from './formattingDate.js'

export const addByClick = () => {
    const addFormNameEl = document.querySelector('.add-form-name')
    const addFormTextEl = document.querySelector('.add-form-text')
    const addFormButtonEl = document.querySelector('.add-form-button')

    addFormButtonEl.addEventListener('click', () => {
        const userName = formattingInputValue(addFormNameEl)

        const userText = formattingInputValue(addFormTextEl)

        if (!userName.trim() || !userText.trim()) {
            alert(
                'Чтобы оставить комментарий, нужно указать Ваше имя и текст сообщения!',
            )
        } else {
            formattingDate()

            commentBox.push({
                name: userName,
                when: formattingDate(),
                text: userText,
                itLikes: false,
                counterLikes: 0,
            })
            renderComments()

            addFormNameEl.value = ''
            addFormTextEl.value = ''
        }
    })
}
