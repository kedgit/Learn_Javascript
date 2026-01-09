const button = document.querySelectorAll(".button")
const bd = document.querySelector(".main")

//console.log(button)
button.forEach(function (btn) {
    console.log(btn)
    // events
    btn.addEventListener("click", function (e) {
        let color = e.target.id
        console.log(color);

        if(color==="orange")
            bd.style.backgroundColor=color
        
        else if(color==="white")
            bd.style.backgroundColor=color
        else
            bd.style.backgroundColor=color


    })
})