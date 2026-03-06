import { commentBox } from './commentBox.js'
import { likeListeners } from './likeListeners.js'
import { commentsListeners } from './commentsListeners.js'
import { formattingDate } from './formattingDate.js'
import { addByClick } from './addByClick.js'
import { renderLogin } from './renderLogin.js'
import { name, token } from './api.js'

export const renderComments = () => {
    const container = document.querySelector('.container')

    const commentsHtml = commentBox
        .map((comment, index) => {
            return `
            <li class="comment" data-index="${index}">
          <div class="comment-header">
            <div>${comment.name}</div>
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

    const addCommentsHtml = `
            <div class="add-form">
                <input
                    type="text"
                    class="add-form-name"
                    placeholder="Введите ваше имя"
                    readonly
                    value="${name}"
                    id="name-input"
                />
                <textarea
                    type="textarea"
                    class="add-form-text"
                    placeholder="Введите ваш комментарий"
                    rows="4"
                    id="text-input"
                ></textarea>
                <div class="add-form-row">
                    <button class="add-form-button">Написать</button>
                </div>
            </div>
            <div class="form-loading" style="display: none; margin-top: 20px">
                Комментарий добавляется...
            </div>
       `

    const linkToLoginText = `<p>Чтобы отправить комментарий, <span class="link-login">войдите</p>`

    const baseHtml = `<ul class="comments">${commentsHtml}</ul>
    ${token ? addCommentsHtml : linkToLoginText}`

    container.innerHTML = baseHtml

    if (token) {
        likeListeners(renderComments)
        commentsListeners()
        addByClick(renderComments)
    } else {
        document.querySelector('.link-login').addEventListener('click', () => {
            renderLogin()
        })
    }
}
