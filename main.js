$(function() {
    $('.btn-inc').click(({target}) => {
        let countTag = $(target).next().text()
        console.log(countTag)
        // let currentCount = $(target).next().text()
        // console.log(currentCount)
    })
})

// let newDiv = $("<div>").addClass("ftw")

// let btn = document.getElementById("like");

// btn.addEventListener("click", e=>{
// let currentCount = btn.nextSibling.textContent.trim()
// newCount = parseInt(currentCount)+1
// btn.nextSibling.textContent = newCount
// });