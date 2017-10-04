$(function() {
    $('.btn-inc').click(({target}) => {
        console.log(target)
        let currentCount = $(target).next().text()
        console.log(currentCount)
        //console.log(this)
    })
})

//let btn = document.getElementById("like");

//btn.addEventListener("click", e=>{
//let currentCount = btn.nextSibling.textContent.trim()
//newCount = parseInt(currentCount)+1
//btn.nextSibling.textContent = newCount
//});