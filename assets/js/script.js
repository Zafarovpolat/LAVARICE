let headerMenuBtn = document.querySelector(".header__menu-open")
let headerMenuClose = document.querySelector(".header__menu-close")
let headerMenuBcg = document.querySelector(".header__menu-bcg")
let headerMenu = document.querySelector(".header__menu")
let orderSumOther = document.querySelector(".order__sum-other")
let orderSumOtherRadio = document.querySelector("#sum4")
let orderAllSum = document.querySelector(".order__all-sum")
let orderForm = document.querySelector(".order__form")
let orderSumList = document.querySelectorAll(".order__sum-list")
let footerLinks = document.querySelectorAll(".footer__links")
let body = document.querySelector('body')

headerMenuBtn.addEventListener('click', () => {
    headerMenu.classList.add('visible')
    body.style.overflowY = "hidden"
})

headerMenuClose.addEventListener('click', () => {
    headerMenu.classList.remove('visible')
    body.style.overflowY = "scroll"
})

headerMenuBcg.addEventListener('click', () => {
    headerMenu.classList.remove('visible')
    body.style.overflowY = "scroll"
})

orderSumOther.addEventListener('click', () => {
    orderSumOtherRadio.checked = 'true'
})

orderSumOther.addEventListener('input', (e) => {
    orderSumOther.classList.add('checked')
})

orderSumOther.addEventListener("focus", function () {
    if (orderSumOther.value.endsWith(" ₽")) {
        orderSumOther.value = orderSumOther.value.slice(0, -2);
    }
});

orderSumOther.addEventListener("focusout", function () {
    orderSumOther.classList.add('checked')
    if (orderSumOther.value && !orderSumOther.value.endsWith(" ₽")) {
        orderSumOther.value = orderSumOther.value + " ₽";
    }
});

footerLinks.forEach(item => {
    let showButton = item.querySelector('.show-menu')
    let links = item.querySelectorAll(".footer__link")

    showButton.addEventListener('click', () => {
        if (!showButton.classList.contains("up")) {
            showButton.classList.add('up')
            links.forEach(link => {
                link.style.display = "flex"
            })
        }

        else {
            showButton.classList.remove('up')
            links.forEach(link => {
                link.style.display = "none"
            })
        }
    })
})