import { fetchComments } from './api.js'
import { updateComments } from './commentBox.js'
import { renderComments } from './renderComments.js'

export const fetchAndRenderComments = (isFirstLoading) => {
    if (isFirstLoading) {
        document.getElementById('container').innerHTML =
            `<p>Пожалуйста, подождите, загружаю список комментариев...</p>`
    }

    fetchComments().then((data) => {
        updateComments(data)
        renderComments()
    })
}
