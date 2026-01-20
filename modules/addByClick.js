import { updateComments } from './commentBox.js'
import { formattingInputValue } from './formattingInputValue.js'
import { formattingDate } from './formattingDate.js'
import { postComment } from './api.js'

export const addByClick = (renderComments) => {
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

            postComment(userText, userName).then((data) => {
                updateComments(data)
                renderComments()
                userText.value = ''
                userName.value = ''
            })
        }
    })
}
