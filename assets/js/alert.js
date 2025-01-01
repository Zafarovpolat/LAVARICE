let alert1Btn = document.querySelector("#alert1Btn")
let alert1Wrapper = document.querySelector(".alert-wrapper1")
let alert2Btn = document.querySelector("#alert2Btn")
let alert2Wrapper = document.querySelector(".alert-wrapper2")
let alert3Btn = document.querySelector("#alert3Btn")
let alert3Wrapper = document.querySelector(".alert-wrapper3")
let alert4Btn = document.querySelector("#alert4Btn")
let alert4Wrapper = document.querySelector(".alert4")
let isAlertShowing = false

alert1Btn.addEventListener('click', () => {
    alert1Wrapper.style.display = 'flex'
})

alert1Wrapper.querySelector(".alert-bcg").addEventListener('click', () => {
    alert1Wrapper.style.display = 'none'
})

alert1Wrapper.querySelector(".alert-close").addEventListener('click', () => {
    alert1Wrapper.style.display = 'none'
})

alert1Wrapper.querySelector(".alert-cancel").addEventListener('click', () => {
    alert1Wrapper.style.display = 'none'
})

alert2Btn.addEventListener('click', () => {
    alert2Wrapper.style.display = 'flex'
})

alert2Wrapper.querySelector(".alert-bcg").addEventListener('click', () => {
    alert2Wrapper.style.display = 'none'
})

alert2Wrapper.querySelector(".alert-close").addEventListener('click', () => {
    alert2Wrapper.style.display = 'none'
})

alert3Btn.addEventListener('click', () => {
    alert3Wrapper.style.display = 'flex'
})

alert3Wrapper.querySelector(".alert-bcg").addEventListener('click', () => {
    alert3Wrapper.style.display = 'none'
})

alert3Wrapper.querySelector(".alert-confirm").addEventListener('click', () => {
    alert3Wrapper.style.display = 'none'
})

alert4Btn.addEventListener('click', () => {
    if (!isAlertShowing) {
        isAlertShowing = true
        alert4Wrapper.classList.add('show-alert')
        setTimeout(() => {
            alert4Wrapper.classList.remove('show-alert')
            isAlertShowing = false
        }, 2000);
    }
})