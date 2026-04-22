const tabs = document.querySelectorAll('.tab')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const content = tab.nextElementSibling
        document.querySelectorAll('.content').forEach(c => {
            if (c != content) {
                c.style.maxHeight = null
            }

            if (content.style.maxHeight) {
                content.style.maxHeight = null
            } else {
                content.style.maxHeight = content.scrollHeight + 'px'
            }
        })
    })
})