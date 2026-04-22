const acceptBtn = document.querySelector('.accept')
const rejectBtn = document.querySelector('.reject')
const cookie = document.querySelector('.cookie-container')

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
    document.cookie = 'name=user1; expires=Thu, 18 Dec 2030 12:00:00 UTC; path=/'
    closeCookie()
}
const rejectHandler = () => {
    document.cookie = 'name=user1; expires=Thu, 18 Dec 1980 12:00:00 UTC; path=/'
    closeCookie()
}

acceptBtn.addEventListener('click', acceptHandler)
rejectBtn.addEventListener('click', rejectHandler)
