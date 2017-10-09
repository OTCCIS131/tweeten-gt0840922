let btns = Array.from(document.getElementsByClassName('inc'))

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        console.log('click')
        let currentCount = parseInt(btn.nextSibling.textContent)
        let newCount = currentCount + 1

        btn.nextSibling.textContent = ` ${newCount} `
    })
})