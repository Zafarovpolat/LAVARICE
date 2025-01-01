let body = document.querySelector('body')
let headerMenuBtn = document.querySelector(".header__menu-open")
let headerMenuClose = document.querySelector(".header__menu-close")
let headerMenuBcg = document.querySelector(".header__menu-bcg")
let headerMenu = document.querySelector(".header__menu")
let otherLinks = document.querySelectorAll(".header__nav>ul .header__nav-link:not(.second__menu-link)")
let headerNav = document.querySelector(".header__nav")
let headerNavList = document.querySelector(".header__nav-list:nth-child(2)")
let secondMenuClose = document.querySelectorAll(".second__menu-close")
let secondMenuLinks = document.querySelectorAll(".second__menu-link")
let secondMenu = document.querySelectorAll(".second__menu")
let footerLinks = document.querySelectorAll(".footer__links")
let footerMenu = document.querySelectorAll(".footer__menu")

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

footerLinks.forEach((item, index) => {
    let showContent = item.querySelector('div')
    let showButton = item.querySelector('.show-menu')

    showContent.addEventListener('click', () => {
        if (!showButton.classList.contains("up")) {
            showButton.classList.add('up')
            footerMenu[index].style.opacity = '1'
            footerMenu[index].style.maxHeight = '500px'
            footerMenu[index].style.marginTop = '14px'
        }

        else {
            showButton.classList.remove('up')
            footerMenu[index].style.opacity = '0'
            footerMenu[index].style.maxHeight = '0px'
            footerMenu[index].style.marginTop = '0px'
        }
    })
})

if (window.innerWidth > 768) {
    secondMenuLinks.forEach((link, i) => {
        link.addEventListener('mouseover', (e) => {
            e.stopPropagation()
            if (secondMenu[i]) {
                secondMenu.forEach(i => {
                    i.style.display = 'none'
                })
                secondMenu[i].style.display = 'flex'
            }
        })
    })

    otherLinks.forEach((link) => {
        link.addEventListener('mouseover', (e) => {
            secondMenu.forEach(i => {
                i.style.display = 'none'
            })
        })
    })

    headerMenu.addEventListener('mouseover', (e) => {
        e.stopPropagation()
        secondMenu.forEach(i => {
            i.style.display = 'none'
        })
    })

    headerNav.addEventListener('mouseover', (e) => {
        e.stopPropagation()
    })

    headerNavList.addEventListener('mouseover', (e) => {
        secondMenu.forEach(i => {
            i.style.display = 'none'
        })
    })

    headerMenuBcg.addEventListener('mouseover', (e) => {
        secondMenu.forEach(i => {
            i.style.display = 'none'
        })
    })
}

else {
    secondMenuLinks.forEach((link, i) => {
        link.addEventListener('click', (e) => {
            if (secondMenu[i]) {
                secondMenu.forEach(i => {
                    i.style.display = 'none'
                })
                secondMenu[i].style.display = 'flex'
            }
        })
    })

    secondMenuClose.forEach(btn => {
        btn.addEventListener('click', () => {
            secondMenu.forEach(i => {
                i.style.display = 'none'
            })
        })
    })
}