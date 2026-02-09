import { commentBox } from './commentBox.js'
import { renderComments } from './renderComments.js'

export const likeListeners = () => {
    const isLikedButtons = document.querySelectorAll('.like-button')

    for (const isLikedButton of isLikedButtons) {
        isLikedButton.addEventListener('click', (event) => {
            event.stopPropagation()

            const index = isLikedButton.dataset.index
            const comment = commentBox[index]

            if (!comment.isLiked) {
                comment.likes++
                comment.isLiked = true
            } else {
                comment.likes--
                comment.isLiked = false
            }

            renderComments()
        })
    }
}
