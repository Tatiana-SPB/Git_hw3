import { commentBox } from './commentBox.js'
import { likeListeners } from './likeListeners.js'
import { commentsListeners } from './commentsListeners.js'

export const renderComments = () => {
    const commentsEl = document.querySelector('.comments')

    const commentsHtml = commentBox
        .map((comment, index) => {
            return `<li class="comment" data-index="${index}">
          <div class="comment-header">
            <div>${comment.name}</div>
            <div>${comment.date}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${comment.text}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.likes}</span>
              <button class="like-button ${comment.isLiked ? '-active-like' : ''}" data-index="${index}"></button>
            </div>
          </div>
        </li> `
        })
        .join('')

    commentsEl.innerHTML = commentsHtml
    likeListeners()
    commentsListeners()
}
