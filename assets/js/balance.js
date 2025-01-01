let balanceBtn = document.querySelector(".balance__btn");
let balanceWindow = document.querySelector(".balance__window");
let balanceClose = document.querySelector(".balance__close");
let balanceInput = document.querySelector(".balance__input");
let balanceNumber = document.querySelector("#balanceNumber")
let balanceId = document.querySelector(".balance__id")
let balanceAmount = document.querySelector(".balance__amount")
let balanceDate = document.querySelector(".balance__date")
let balanceSubmit = document.querySelector(".balance__submit")
let isCodeValid = false;
let currentNumber = 0;

balanceBtn.addEventListener('click', () => {
    if (isCodeValid) {
        currentNumber = "***" + balanceInput.value.slice(3)
        balanceWindow.style.display = "flex";
        balanceAmount.style.display = "flex";
        balanceNumber.textContent = currentNumber
        balanceDate.textContent = ""
        balanceDate.textContent = "Сертификат действует до 20.05.2025"
    }
})

balanceClose.addEventListener('click', () => {
    balanceWindow.style.display = "none";
})

balanceInput.addEventListener('input', () => {
    if (balanceInput.value.length > 7) {
        balanceInput.value = balanceInput.value.slice(0, 7);
        currentNumber = balanceInput.value
    }

    if (balanceInput.value.length === 7) {
        balanceInput.classList.remove('wrong');
        isCodeValid = true;
    } else {
        balanceInput.classList.add('wrong');
        isCodeValid = false;
    }
});

balanceSubmit.addEventListener('click', () => {
    balanceWindow.style.display = "none";
})