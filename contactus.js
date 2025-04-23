let menu = document.getElementById("menu")
let side_nav_close = document.getElementById("side-nav-close")
let side_navbar = document.getElementById("side-navbar")


menu.addEventListener("click",function(){
    side_navbar.style.left = "0"
})

side_nav_close.addEventListener("click", () =>{
    side_navbar.style.left = "-60%"

})


