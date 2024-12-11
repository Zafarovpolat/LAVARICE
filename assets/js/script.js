let headerMenuBtn = document.querySelector(".header__menu-open")
let headerMenuClose = document.querySelector(".header__menu-close")
let headerMenuBcg = document.querySelector(".header__menu-bcg")
let headerMenu = document.querySelector(".header__menu")
let orderSumOther = document.querySelector(".order__sum-other")
let orderSumOtherRadio = document.querySelector("#sum4")

headerMenuBtn.addEventListener('click', () => {
    headerMenu.classList.add('visible')
})

headerMenuClose.addEventListener('click', () => {
    headerMenu.classList.remove('visible')
})

headerMenuBcg.addEventListener('click', () => {
    headerMenu.classList.remove('visible')
})

orderSumOther.addEventListener('click', () => {
    orderSumOtherRadio.checked = 'true'
    console.log(orderSumOtherRadio);

})