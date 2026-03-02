import { fetchComments } from './api.js'
import { updateComments } from './commentBox.js'
import { renderComments } from './renderComments.js'

export const fetchAndRenderComments = () => {
    document.getElementById('app').innerHTML =
        'Пожалуйста, подождите, загружаю список комментариев...'

    return fetchComments().then((data) => {
        console.log(data.comments)
        updateComments(data.comments)
        renderComments()
    })
}
