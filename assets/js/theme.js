const bodyHtml = document.querySelector('html')
const themeButton = document.getElementById('theme')

function getHtmlClass() {
    let htmlClass = bodyHtml.classList
    return htmlClass
}

function changeClass(target, state, name) {
    if (state == 'add') {
        target.classList.add(name)
        return
    }
    
    target.classList.remove(name)
}

function changeTheme() {
    if (getHtmlClass() == 'default') {
        changeClass(bodyHtml, 'remove', 'default')
        changeClass(bodyHtml, 'add', 'light')
        themeButton.style.translate = '165%'
        return
    } else if (getHtmlClass() == 'light') {
        changeClass(bodyHtml, 'remove', 'light')
        changeClass(bodyHtml, 'add', 'dark')
        themeButton.style.translate = '330%'
        return
    }

    changeClass(bodyHtml, 'remove', 'dark')
    changeClass(bodyHtml, 'add', 'default')
    themeButton.style.translate = '0%'
}

themeButton.addEventListener('click', changeTheme)