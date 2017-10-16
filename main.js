$(function() {
    $(".inc").click(function(e){
        let button = $(this)
        let currentCount = parseInt(button.Next().text())
        let newCount = currentCount + 1

        button.next().text() = ` ${newCount} `
    })

    $("#newTweetForm").submit(function (e) {
        e.preventDefault()
        let newTweetInput = $("#tweet", $(this))
        let newTweet = newTweetInput.val()

        if(newTweet.trim() == '') return
        
        let newElement = $("li:last-child", $("#tweet")).clone()

        newElement.Next(newTweet)
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