const menuToggle = document.querySelector(".menuToggle")
const menuToggleIcon = document.querySelector(".menuToggle span")
const brand = document.querySelector(".brand")
const mobileMenu = document.querySelector(".mobileMenu")
const header = document.querySelector("header")

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active")
    brand.classList.toggle("active")
    mobileMenu.classList.toggle("active")
    header.classList.toggle("active")

    if (mobileMenu.classList.contains("active")) {
        menuToggleIcon.textContent = "close"
    }
    else {
        menuToggleIcon.textContent = "menu"
    }
})

//Code to update the footer year
document.getElementById("currentYear").textContent =
    new Date().getFullYear();

document.querySelector(".brand").addEventListener("click", () => {
        window.location.href = "/"
    })