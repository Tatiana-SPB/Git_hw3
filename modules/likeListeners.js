import { commentBox } from './commentBox.js'
import { renderComments } from './renderComments.js'

export const likeListeners = () => {
    const itLikesButtons = document.querySelectorAll('.like-button')

    for (const itLikesButton of itLikesButtons) {
        itLikesButton.addEventListener('click', (event) => {
            event.stopPropagation()

            const index = itLikesButton.dataset.index
            const comment = commentBox[index]

            if (!comment.itLikes) {
                comment.counterLikes++
                comment.itLikes = true
            } else {
                comment.counterLikes--
                comment.itLikes = false
            }

            renderComments()
        })
    }
}
