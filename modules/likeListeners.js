import { commentBox } from './commentBox.js'
import { renderComments } from './renderComments.js'

export const likeListeners = () => {
    const isLikedButtons = document.querySelectorAll('.like-button')
    const isLikeLoading = document.querySelectorAll('.loading-like')

    for (const isLikedButton of isLikedButtons) {
        isLikedButton.addEventListener('click', (event) => {
            event.stopPropagation()
            delay(2000).then(() => {
                const index = isLikedButton.dataset.index
                const comment = commentBox[index]

                if (!comment.isLiked) {
                    comment.likes++
                    comment.isLiked = true
                    comment.isLikeLoading = false
                } else {
                    comment.likes--
                    comment.isLiked = false
                    comment.isLikeLoading = false
                }
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
