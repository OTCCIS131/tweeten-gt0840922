$(function() {
    $(".inc").click(function(e){
        let button = $(this)
        let currentCount = parseInt(button.Next().text())
        let newCount = currentCount + 1

        button.next().text() = ` ${newCount} `
    })
})

//let btns = Array.from(document.getElementsByClassName('inc'))

//btns.forEach(btn => {
//    btn.addEventListener('click', e => {
//        console.log('click')
//        let currentCount = parseInt(btn.nextSibling.textContent)
//        let newCount = currentCount + 1
//
//        btn.nextSibling.textContent = ` ${newCount} `
//    })
//})