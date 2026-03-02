import { commentBox } from './commentBox.js'
import { likeListeners } from './likeListeners.js'
import { commentsListeners } from './commentsListeners.js'
import { formattingDate } from './formattingDate.js'
import { addByClick } from './addByClick.js'

export const renderComments = () => {
    const app = document.getElementById('app')

    const commentsHtml = commentBox
        .map((comment, index) => {
            return `<li class="comment" data-index="${index}">
          <div class="comment-header">
            <div>${comment.author.name}</div>
            <div>${formattingDate(comment.date)}</div>
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

    const appHtml = `<div class="container">
            <ul class="comments">${commentsHtml}</ul>
            <div class="add-form">
                <input
                    type="text"
                    class="add-form-name"
                    placeholder="Введите ваше имя"
                />
                <textarea
                    type="textarea"
                    class="add-form-text"
                    placeholder="Введите ваш коментарий"
                    rows="4"
                ></textarea>
                <div class="add-form-row">
                    <button class="add-form-button">Написать</button>
                </div>
            </div>
            <div class="form-loading" style="display: none; margin-top: 20px">
                Комментарий добавляется...
            </div>
        </div>`

    app.innerHTML = appHtml
    addByClick()
    likeListeners()
    commentsListeners()
}
