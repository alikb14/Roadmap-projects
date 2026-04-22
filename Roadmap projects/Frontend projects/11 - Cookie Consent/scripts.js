const acceptBtn = document.querySelector('.accept')
const rejectBtn = document.querySelector('.reject')
const cookie = document.querySelector('.cookie')

window.addEventListener('load', () => {
    if (!document.cookie) {
        setTimeout(() => {
            cookie.style.display = 'flex'
        }, 1000)
        setTimeout(() => cookie.classList.add('show'), 2000)
    }
})

const closeCookie = () => {
    cookie.classList.remove('show')
    setTimeout(() => cookie.style.display = 'none', 500)
}

const acceptHandler = () => {
    document.cookie = 'test=test'
    closeCookie()
}
acceptBtn.addEventListener('click', acceptHandler)
rejectBtn.addEventListener('click', closeCookie)
