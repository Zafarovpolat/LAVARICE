let headerMenuBtn = document.querySelector("#headerMenuBtn")
let headerMenuClose = document.querySelector("#headerMenuBtnClose")
let headerMenu = document.querySelector(".header__menu")

headerMenuBtn.addEventListener('click', () => {
    headerMenu.classList.add('visible')
})

headerMenuBtnClose.addEventListener('click', () => {
    headerMenu.classList.remove('visible')
})