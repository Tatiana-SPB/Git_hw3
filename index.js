import { renderComments } from './modules/renderComments.js'
import { addByClick } from './modules/addByClick.js'
import { fetchComments } from './modules/api.js'
import { updateComments } from './modules/commentBox.js'

document.querySelector('.comments').innerHTML =
    'Пожалуйста, подождите, загружаю список комментариев...'

fetchComments().then((data) => {
    updateComments(data)
    renderComments()
})

addByClick(renderComments)
