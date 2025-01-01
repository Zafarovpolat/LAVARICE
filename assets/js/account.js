let changeNumber = document.querySelector(".confirmation__change")
let isNewUser = false
let signInNumber = document.querySelector("#phoneNumber")
let confirmationCode = document.querySelector("#confirmationCode")
let orderBtn = document.querySelector(".order__btn")
let options = document.querySelector(".options")
let signUpBtn = document.querySelector("#signUpBtn")
let signUp = document.querySelector(".sign-up")
let phoneNumberNew = document.querySelector("#phoneNumberNew")
let signConfirmation = document.querySelector(".confirmation")
let signInBtn = document.querySelector(".sign__btn")
let accountTypes = document.querySelectorAll(".order__accounts-item")
let codeResend = document.querySelector(".resend__btn")
let signIn = document.querySelector(".sign-in")
let nameNew = document.querySelector("#nameNew")
let emailNew = document.querySelector("#emailNew")
let orderBoxAcc = document.querySelector(".order__box.acc")
let lastClickedType = 'old';
let isFirstTimeInputing = true

if (orderBoxAcc) {
    changeNumber.addEventListener('click', () => {
        if (!isNewUser) {
            signInNumber.focus()
        }
    })

    confirmationCode.addEventListener('input', () => {
        if (confirmationCode.value.length == 5) {
            confirmationCode.disabled = true
            orderBtn.disabled = false
            options.style.display = "flex"
        }
    })

    signUp.querySelectorAll('input').forEach(i => {
        i.addEventListener('input', () => {
            signUpBtn.style.display = 'flex'
        })
    })

    phoneNumberNew.addEventListener('input', () => {
        let value = phoneNumberNew.value.replace(/\D/g, '');

        if (value === '') {
            phoneNumberNew.value = '+';
            isFirstTimeInputing = false;
            return;
        }

        if (isFirstTimeInputing) {
            value = value.startsWith('7') ? value.slice(1) : value;
            let formatted = '+7';

            if (value.length > 0) {
                formatted += ' (' + value.slice(0, 3);
            }
            if (value.length > 3) {
                formatted += ') ' + value.slice(3, 6);
            }
            if (value.length > 6) {
                formatted += '-' + value.slice(6, 8);
            }
            if (value.length > 8) {
                formatted += '-' + value.slice(8, 10);
            }

            phoneNumberNew.value = formatted.slice(0, 18);
        }

        else {
            if (phoneNumberNew.value === '+' || value.startsWith('7')) {
                value = value.startsWith('7') ? value.slice(1) : value;
                let formatted = '+7';

                if (value.length > 0) {
                    formatted += ' (' + value.slice(0, 3);
                }
                if (value.length > 3) {
                    formatted += ') ' + value.slice(3, 6);
                }
                if (value.length > 6) {
                    formatted += '-' + value.slice(6, 8);
                }
                if (value.length > 8) {
                    formatted += '-' + value.slice(8, 10);
                }

                phoneNumberNew.value = formatted.slice(0, 18);
            } else {
                phoneNumberNew.value = '+' + value.slice(0, 15);
            }
        }
    });

    signUpBtn.addEventListener('click', (e) => {
        let currentNumber2 = document.querySelector("#currentNumber")
        e.preventDefault()

        if (phoneNumberNew.value.split('')[1] == "7" && phoneNumberNew.value.length > 17) {
            currentNumber2.textContent = phoneNumberNew.value
            signConfirmation.style.display = "flex"
            phoneNumberNew.parentElement.classList.remove("wrong")
        }

        else if (phoneNumberNew.value.split('')[1] != "7") {
            if (phoneNumberNew.value.length > 11) {
                currentNumber2.textContent = phoneNumberNew.value
                signConfirmation.style.display = "flex"
                phoneNumberNew.parentElement.classList.remove("wrong")
            }

            else {
                phoneNumberNew.focus()
                phoneNumberNew.parentElement.classList.add("wrong")
            }
        }

        else {
            phoneNumberNew.focus()
            phoneNumberNew.parentElement.classList.add("wrong")
        }
    })

    accountTypes.forEach(accountType => {

        accountType.addEventListener('click', () => {
            if (accountType.querySelector('input').value !== 'new') {
                if (lastClickedType !== 'old') {
                    signIn.style.display = "flex"
                    signUp.style.display = "none"
                    isNewUser = false
                    signConfirmation.style.display = "none"
                    currentNumber = ""
                    lastClickedType = "old"
                    confirmationCode.removeAttribute('disabled')
                    confirmationCode.value = ""
                }
            }

            else {
                if (lastClickedType !== "new") {
                    signUp.style.display = "flex"
                    signInBtn.style.display = "flex"
                    signIn.style.display = "none"
                    isNewUser = true
                    signConfirmation.style.display = "none"
                    currentNumber = ""
                    lastClickedType = "new"
                    confirmationCode.removeAttribute('disabled')
                    confirmationCode.value = ""
                }
            }
        })
    })

    signInNumber.addEventListener('input', () => {
        let value = signInNumber.value.replace(/\D/g, '');

        if (value === '') {
            signInNumber.value = '+';
            isFirstTimeInputing = false;
            return;
        }

        if (isFirstTimeInputing) {
            value = value.startsWith('7') ? value.slice(1) : value;
            let formatted = '+7';

            if (value.length > 0) {
                formatted += ' (' + value.slice(0, 3);
            }
            if (value.length > 3) {
                formatted += ') ' + value.slice(3, 6);
            }
            if (value.length > 6) {
                formatted += '-' + value.slice(6, 8);
            }
            if (value.length > 8) {
                formatted += '-' + value.slice(8, 10);
            }

            signInNumber.value = formatted.slice(0, 18);
        }

        else {
            if (signInNumber.value === '+' || value.startsWith('7')) {
                value = value.startsWith('7') ? value.slice(1) : value;
                let formatted = '+7';

                if (value.length > 0) {
                    formatted += ' (' + value.slice(0, 3);
                }
                if (value.length > 3) {
                    formatted += ') ' + value.slice(3, 6);
                }
                if (value.length > 6) {
                    formatted += '-' + value.slice(6, 8);
                }
                if (value.length > 8) {
                    formatted += '-' + value.slice(8, 10);
                }

                signInNumber.value = formatted.slice(0, 18);
            } else {
                signInNumber.value = '+' + value.slice(0, 15);
            }
        }
    });

    signInBtn.addEventListener('click', (e) => {
        let currentNumber = document.querySelector("#currentNumber")

        e.preventDefault()

        if (signInNumber.value.split('')[1] == "7" && signInNumber.value.length > 17) {
            currentNumber.textContent = signInNumber.value
            signConfirmation.style.display = "flex"
            signConfirmation.style.margintTop = "8px"
            signInBtn.style.display = 'none'
            signInNumber.parentElement.classList.remove("wrong")
        }

        else if (signInNumber.value.split('')[1] != "7") {

            if (signInNumber.value.length > 11) {
                currentNumber.textContent = signInNumber.value
                signConfirmation.style.display = "flex"
                signConfirmation.style.margintTop = "8px"
                signInBtn.style.display = 'none'
                signInNumber.parentElement.classList.remove("wrong")
            }

            else if (signInNumber.value.length < 17) {
                signInNumber.focus()
                signInNumber.parentElement.classList.add("wrong")
            }
        }

        else {
            signInNumber.focus()
            signInNumber.parentElement.classList.add("wrong")
        }
    })

    codeResend.addEventListener("click", () => {
        if (phoneNumberNew.getBoundingClientRect().width == 0) {

        }

    })
}

else {
    orderBtn.removeAttribute('disabled')
}