import { commentBox } from './commentBox.js'
import { renderComments } from './renderComments.js'

export const likeListeners = () => {
    const isLikedButtons = document.querySelectorAll('.like-button')

    for (const isLikedButton of isLikedButtons) {
        isLikedButton.addEventListener('click', (event) => {
            event.stopPropagation()
            const index = isLikedButton.dataset.index
            const comment = commentBox[index]

            isLikedButton.classList.add('-loading-like')

            delay(2000).then(() => {
                if (!comment.isLiked) {
                    comment.likes++
                    comment.isLiked = true
                } else {
                    comment.likes--
                    comment.isLiked = false
                }
                isLikedButton.classList.remove('-loading-like')

                renderComments()
            })
        })
    }
}
function delay(interval = 300) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, interval)
    })
}
