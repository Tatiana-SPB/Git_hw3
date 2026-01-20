export const formattingDate = () => {
    const currentDateEl = new Date()
    let minutes = ('0' + currentDateEl.getMinutes()).slice(-2)
    let month = ('0' + (currentDateEl.getMonth() + 1)).slice(-2)

    const fullDate =
        currentDateEl.getDate() +
        '.' +
        month +
        '.' +
        currentDateEl.getFullYear() +
        ' ' +
        currentDateEl.getHours() +
        ':' +
        minutes
    return fullDate
}
