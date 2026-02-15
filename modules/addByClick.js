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
            alert('Заполните форму!')
            return
        }

        document.querySelector('.form-loading').style.display = 'block'
        document.querySelector('.add-form').style.display = 'none'

        formattingDate()

        postComment(userText, userName).then((data) => {
            document.querySelector('.form-loading').style.display = 'none'
            document.querySelector('.add-form').style.display = 'flex'
            updateComments(data)
            renderComments()
        })

        addFormTextEl.value = ''
        addFormNameEl.value = ''
    })
}
