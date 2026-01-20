export const formattingInputValue = (userValue) => {
    return userValue.value.replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}
