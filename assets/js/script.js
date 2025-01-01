let orderSumOther = document.querySelector(".order__sum-other")
let orderSumOtherRadio = document.querySelector("#sum4")
let orderAllSum = document.querySelector(".order__all-sum")
let orderForm = document.querySelector(".order__form")
let sumOtherInput = document.querySelector(".order__sum-other")
let orderSumList = document.querySelectorAll(".order__sum-list")
let present = document.querySelector(".present")
let receiverList = document.querySelectorAll(".order__receiver-list input")
let calendar = document.querySelector(".calendar")
let info1 = document.querySelector(".info1")
let info2 = document.querySelector(".info2")
let timeUtc = document.querySelector("#timeUtc")
let timeOptions = document.querySelector(".date-pick__options")
let timeOptionsList = document.querySelectorAll(".date-pick__option")
let selectedTimeOption = document.querySelector(".date-pick__option.selected")
let utcText = document.querySelector("#utcText")
let datePickBtn = document.querySelector(".date-pick__choose")
let calendarDays = document.querySelectorAll(".calendar__days li:not(.notactive)")
let calendarDaySelected = document.querySelector(".calendar__days .selected")
let calendarDayBox = document.querySelector(".calendar__days")
let calendarChoose = document.querySelector(".calendar__choose")
let calendarCancel = document.querySelector(".calendar__cancel")
let calendarYear = document.querySelector(".calendar__year")
let calendarYearBtnPrev = document.querySelector(".calendar__prev")
let calendarYearBtnNext = document.querySelector(".calendar__next")
let calendarDate = document.querySelector('.calendar__date')
let chooseDateText = document.querySelector("#chooseDateText")
let calendarTime = document.querySelector(".calendar__time")
let timeSelected = document.querySelectorAll(".time-main")
let timeHours = document.querySelector('.calendar__time-left .back');
let timeHoursItems = timeHours.querySelectorAll("li")
let timeMinutes = document.querySelector('.calendar__time-right .back');
let timeMinutesItems = timeMinutes.querySelectorAll("li")
let backLayer = document.querySelector('.back-layer');
let orderDateItems = document.querySelectorAll(".order__date-list li input")
let datePick = document.querySelector(".date-pick")
let chooseDateArrow = document.querySelector('#chooseDateArrow');
let chooseUtcArrow = document.querySelector('#chooseUtcArrow');
let sliderMainImg = document.querySelector('.order__img-main')
let slidesList = document.querySelectorAll('.slide')
let sliderImgList = document.querySelectorAll('.order__img-item')
let sliderNext = document.querySelector(".order__btn-next")
let sliderPrev = document.querySelector(".order__btn-prev")
let slider = document.querySelector(".slider")
let scrollContainer = document.querySelector('.calendar__time-left .back');
let scrollContainer2 = document.querySelector('.calendar__time-right .back');
let calendarDown = document.querySelector(".calendar__down")
let calendarBcg = document.querySelector(".calendar__bcg")
let activeImgItem = document.querySelector(".order__img-item.active")
let isDragging = false;
let startPosition = 0;
let scrollStart = 0;
let isScrolling = false;
let sliderCount = 0
let startX = 0;
let isSwiping = false;
let index = 0
let isFirstTimeOpeningTime = true
let isUtcPicking = false

function getDaysOfMonth(year, month) {
    const days = [];
    const date = new Date(year, month, 1);

    while (date.getMonth() === month) {
        days.push({
            day: date.getDate(),
            weekday: date.toLocaleString('ru-RU', { weekday: 'short' }),
        });
        date.setDate(date.getDate() + 1);
    }

    return days;
}

function getDateInfo() {
    const today = new Date();
    const options = { month: 'long' };
    const monthName = today.toLocaleDateString('ru-RU', options);

    return {
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        monthName: monthName.charAt(0).toUpperCase() + monthName.slice(1),
        day: today.getDate()
    };
}

function updateActiveItem(container, items) {
    const containerHeight = container.clientHeight;
    const containerTop = container.getBoundingClientRect().top;
    let closestItem = null;
    let minDistance = Infinity;
    items.forEach(item => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;
        const containerCenter = containerTop + containerHeight / 2;
        const distance = Math.abs(itemCenter - containerCenter);
        if (distance < minDistance) {
            minDistance = distance;
            closestItem = item;
        }
    });
    items.forEach(item => item.classList.remove('time-main'));
    if (closestItem) {
        closestItem.classList.add('time-main');
        timeSelected = document.querySelectorAll(".time-main")
    }
}

function getMonths(year, month, currentDay, currentDate) {
    if (month - 2 < 0) {
        getDaysOfMonth(year - 1, 11).forEach((day, i) => {
            if (day.weekday == "пн") {
                lastDayFromPrevMonth = day.day
            }
        })
    }

    else {
        getDaysOfMonth(year, month - 2).forEach((day, i) => {
            if (day.weekday == "пн") {
                lastDayFromPrevMonth = day.day
            }
        })
    }

    getDaysOfMonth(year, month - 1).forEach((day, i) => {
        if (i == 0) {
            if (day.weekday == "пн") {
            }
            else if (day.weekday == "вт") {
                for (let i = 0; i < 1; i++) {
                    let item = document.createElement('li')
                    item.classList.add("notactive")
                    item.textContent = lastDayFromPrevMonth + i
                    calendarDayBox.appendChild(item);
                }
            }
            else if (day.weekday == "ср") {
                for (let i = 0; i < 2; i++) {
                    let item = document.createElement('li')
                    item.classList.add("notactive")
                    item.textContent = lastDayFromPrevMonth + i
                    calendarDayBox.appendChild(item);
                }
            }
            else if (day.weekday == "чт") {
                for (let i = 0; i < 3; i++) {
                    let item = document.createElement('li')
                    item.classList.add("notactive")
                    item.textContent = lastDayFromPrevMonth + i
                    calendarDayBox.appendChild(item);
                }
            }
            else if (day.weekday == "пт") {
                for (let i = 0; i < 4; i++) {
                    let item = document.createElement('li')
                    item.classList.add("notactive")
                    item.textContent = lastDayFromPrevMonth + i
                    calendarDayBox.appendChild(item);
                }
            }
            else if (day.weekday == "сб") {
                for (let i = 0; i < 5; i++) {
                    let item = document.createElement('li')
                    item.classList.add("notactive")
                    item.textContent = lastDayFromPrevMonth + i
                    calendarDayBox.appendChild(item);
                }
            }
            else if (day.weekday == "вс") {
                for (let i = 0; i < 6; i++) {
                    let item = document.createElement('li')
                    item.classList.add("notactive")
                    item.textContent = lastDayFromPrevMonth + i
                    calendarDayBox.appendChild(item);
                }
            }

            const li = document.createElement('li');
            li.textContent = day.day;
            if (currentDate) {
                if (day.day < currentDay && year == currentDate.year && month == currentDate.month) {
                    li.classList.add('notactive');
                }

                else if (day.day === currentDay && year == currentDate.year && month == currentDate.month) {
                    li.classList.add('selected');
                }
            }
            calendarDayBox.appendChild(li);
        }
        else {
            const li = document.createElement('li');
            li.textContent = day.day;
            calendarDayBox.appendChild(li);
            if (currentDate) {
                if (day.day === currentDay && year == currentDate.year && month == currentDate.month) {
                    li.classList.add('selected');
                }
                else if (day.day < currentDay && year == currentDate.year && month == currentDate.month) {
                    li.classList.add('notactive');
                }
            }
        }
    });

    calendarDays = document.querySelectorAll(".calendar__days li:not(.notactive)")
    calendarDays.forEach(i => {
        i.addEventListener('click', () => {
            if (i.classList.contains('notactive')) {
                return;
            }

            else {
                calendarDays.forEach(i => {
                    i.classList.remove('selected')
                })
                i.classList.add('selected')
                calendarDate.style.display = "none"
                calendarTime.style.display = "flex"
                chooseDateText.textContent = "Выбранное время"
                calendarYearBtnPrev.style.display = "none"
                calendarYearBtnNext.style.display = "none"
                if (isFirstTimeOpeningTime) {
                    scrollContainer.querySelectorAll('li').forEach((i, index) => {
                        if (index == 10) {
                            scrollContainer.scrollTop = i.offsetTop
                        }
                    })
                }
                isFirstTimeOpeningTime = false
                calendarDown.style.display = 'flex'
            }
        })
    })
}

function getMonthName(month) {
    if (month < 1 || month > 12) {
        return "Неверный номер месяца";
    }
    const date = new Date(0, month - 1);
    const monthName = date.toLocaleString('ru-RU', { month: 'long' });
    return monthName.charAt(0).toUpperCase() + monthName.slice(1);
}

function calendarInit() {
    const nowDate = getDateInfo();
    const minDate = getDateInfo();
    let lastTitle = ''

    if (lastTitle.length < 1) {
        calendarYear.textContent = `${nowDate.monthName} ${nowDate.year}`;
    }

    else {
        calendarYear.textContent = lastTitle
    }

    calendarDayBox.innerHTML = '';

    getMonths(nowDate.year, nowDate.month, nowDate.day, minDate);

    calendarYearBtnNext.addEventListener('click', () => {
        if (nowDate.month === 12) {
            calendarDayBox.innerHTML = '';
            nowDate.year += 1;
            nowDate.month = 1;
            getMonths(nowDate.year, nowDate.month);
            calendarYear.textContent = `${getMonthName(nowDate.month)} ${nowDate.year}`;
            lastTitle = `${getMonthName(nowDate.month)} ${nowDate.year}`;
        }
        else {
            calendarDayBox.innerHTML = '';
            nowDate.month += 1;
            getMonths(nowDate.year, nowDate.month);
            calendarYear.textContent = `${getMonthName(nowDate.month)} ${nowDate.year}`;
            lastTitle = `${getMonthName(nowDate.month)} ${nowDate.year}`;
        }
    });

    calendarYearBtnPrev.addEventListener('click', () => {

        if (nowDate.month == minDate.month && nowDate.year == minDate.year) {
            return;
        }

        if (nowDate.month === 1) {
            calendarDayBox.innerHTML = '';
            nowDate.year -= 1;
            nowDate.month = 12;
            getMonths(nowDate.year, nowDate.month, nowDate.day, minDate);
            calendarYear.textContent = `${getMonthName(nowDate.month)} ${nowDate.year}`;

        }
        else {
            calendarDayBox.innerHTML = '';
            nowDate.month -= 1;
            getMonths(nowDate.year, nowDate.month, nowDate.day, minDate);
            calendarYear.textContent = `${getMonthName(nowDate.month)} ${nowDate.year}`;
        }

    });
}

function startDrag(event) {
    isDragging = true;
    startPosition = event.clientY || event.touches[0].clientY; // Для мобильных устройств
    scrollStart = scrollContainer.scrollTop;
    scrollContainer.style.cursor = 'grabbing'; // Курсор изменяется на 'grabbing'
}

function fixedMonth(месяц) {
    const месяцы = {
        "январь": "января",
        "февраль": "февраля",
        "март": "марта",
        "апрель": "апреля",
        "май": "мая",
        "июнь": "июня",
        "июль": "июля",
        "август": "августа",
        "сентябрь": "сентября",
        "октябрь": "октября",
        "ноябрь": "ноября",
        "декабрь": "декабря"
    };
    return месяцы[месяц.toLowerCase()];
}

function dragMove(event) {
    if (!isDragging) return;

    const currentPosition = event.clientY || event.touches[0].clientY; // Для мобильных устройств
    const distance = currentPosition - startPosition;
    scrollContainer.scrollTop = scrollStart - distance;
}

function endDrag() {
    isDragging = false;
    scrollContainer.style.cursor = 'grab'; // Курсор возвращается на 'grab'
}

function startDrag2(event) {
    isDragging = true;
    startPosition = event.clientY || event.touches[0].clientY; // Для мобильных устройств
    scrollStart = scrollContainer2.scrollTop;
    scrollContainer2.style.cursor = 'grabbing'; // Курсор изменяется на 'grabbing'
}

function dragMove2(event) {
    if (!isDragging) return;

    const currentPosition = event.clientY || event.touches[0].clientY; // Для мобильных устройств
    const distance = currentPosition - startPosition;
    scrollContainer2.scrollTop = scrollStart - distance;
}

function endDrag2() {
    isDragging = false;
    scrollContainer2.style.cursor = 'grab'; // Курсор возвращается на 'grab'
}

function sliderMainInit() {
    sliderImgList.forEach(img => {
        let imgNew = document.createElement('img')
        imgNew.src = img.querySelector('img').src
        sliderMainImg.appendChild(imgNew)
    })
}

sumOtherInput.addEventListener('input', (e) => {
    const input = e.target;
    const value = input.value.replace(/\s+/g, '');

    if (!isNaN(value) && value !== '') {
        const formattedValue = new Intl.NumberFormat('ru-RU').format(value);
        input.value = formattedValue;
    } else {
        input.value = '';
    }
});

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

receiverList.forEach(i => {
    i.addEventListener('change', () => {
        if (i.getAttribute('id') == "receiver2") {
            present.style.display = 'flex'
            info1.style.display = "none"
            info2.style.display = "flex"
        }

        else {
            info2.style.display = "none"
            info1.style.display = "flex"
            present.style.display = 'none'
        }
    })
})

timeUtc.addEventListener('click', (e) => {
    e.stopPropagation()
    if (!timeOptions.classList.contains("show")) {
        timeOptions.classList.add("show")
        chooseUtcArrow.style.rotate = "180deg"
        backLayer.style.display = 'block'
        isUtcPicking = true
    }

    else {
        timeOptions.classList.remove("show")
        chooseUtcArrow.style.rotate = "0deg"
        backLayer.style.display = 'none'
        isUtcPicking = false
    }
})

backLayer.addEventListener('click', () => {
    if (isUtcPicking) {
        timeOptions.classList.remove("show")
        chooseUtcArrow.style.rotate = "0deg"
    }
})

timeOptionsList.forEach(i => {
    i.addEventListener('click', (e) => {
        e.stopPropagation()
        timeOptions.classList.remove("show")
        selectedTimeOption.classList.remove('selected')
        i.classList.add('selected')
        selectedTimeOption = i
        utcText.textContent = i.textContent
        chooseUtcArrow.style.rotate = "0deg"
        backLayer.style.display = 'none'
        isUtcPicking = false
    })
})

datePickBtn.addEventListener('click', (e) => {
    e.preventDefault()
    calendar.style.display = 'flex'
    backLayer.style.display = 'block'
    chooseDateArrow.style.rotate = "180deg"
    chooseDateText.textContent = "Укажите время отправки"
    chooseDateText.classList.remove('active')
})

timeHours.addEventListener('scroll', () => {
    updateActiveItem(timeHours, timeHoursItems);
})

timeMinutes.addEventListener('scroll', () => {
    updateActiveItem(timeMinutes, timeMinutesItems);
})

document.querySelectorAll('.back').forEach(back => {
    back.addEventListener('touchstart', (e) => {
        e.preventDefault();
    }, { passive: false });
})

calendarCancel.addEventListener('click', (e) => {
    e.preventDefault()
    calendarTime.style.display = "none"
    calendarDate.style.display = "grid"
    calendarYearBtnPrev.style.display = "flex"
    calendarYearBtnNext.style.display = "flex"
    calendarDown.style.display = 'none'
})

if (calendarBcg) {
    calendarBcg.addEventListener('click', (e) => {
        calendar.style.display = 'none'
        calendarDate.style.display = "grid"
        calendarTime.style.display = "none"
        calendarYearBtnPrev.style.display = "flex"
        calendarYearBtnNext.style.display = "flex"
        backLayer.style.display = 'none'
        chooseDateArrow.style.rotate = "0deg"
        calendarDown.style.display = 'none'
    })

}

calendarChoose.addEventListener('click', (e) => {
    const choosedDate = calendarDayBox.querySelector('.selected');
    const choosedTime = document.querySelectorAll('.time-main');
    let choosedDay = choosedDate.textContent
    let choosedMonth = calendarYear.textContent.split(" ")[0].toLowerCase()
    let choosedYear = getDateInfo().year == calendarYear.textContent.split(" ")[1] ? "" : `${calendarYear.textContent.split(" ")[1]} года `
    let choosedTimeText = `${choosedTime[0].textContent}:${choosedTime[1].textContent}`
    calendar.style.display = 'none'
    calendarDate.style.display = "grid"
    calendarTime.style.display = "none"
    calendarYearBtnPrev.style.display = "flex"
    calendarYearBtnNext.style.display = "flex"
    chooseDateText.textContent = `${choosedDay} ${fixedMonth(choosedMonth)} ${choosedYear} в ${choosedTimeText}`
    backLayer.style.display = 'none'
    chooseDateArrow.style.rotate = "0deg"
    chooseDateText.classList.add('active')
    calendarCancel.textContent = "Отмена"
    calendarDown.style.display = 'none'
})

orderDateItems.forEach(i => {
    i.addEventListener('click', () => {
        if (i.value == "Выбрать время") {
            datePick.style.display = "grid"
        }

        else {
            datePick.style.display = "none"
        }
    })
})

backLayer.addEventListener('click', function () {
    calendar.style.display = 'none'
    calendarTime.style.display = "none"
    calendarDate.style.display = "grid"
    calendarYearBtnPrev.style.display = "flex"
    calendarYearBtnNext.style.display = "flex"
    backLayer.style.display = 'none'
    chooseDateArrow.style.rotate = "0deg"
})

sliderImgList.forEach((img, ind) => {
    img.addEventListener('click', () => {
        sliderMainImg.querySelectorAll('img').forEach(item => {
            item.style.transform = `translate(-${100 * ind}%)`
        })

        sliderImgList.forEach(i => {
            i.classList.remove('active')
        })
        img.classList.add('active')
        activeImgItem = img
        index = ind
    })
})

sliderNext.addEventListener('click', () => {
    let activeSlide = document.querySelector('.slide-active')
    let prevIndex = [...slidesList].indexOf(activeSlide) + 1

    if (slidesList.length > prevIndex) {
        activeSlide.classList.remove('slide-active')
        slidesList.forEach(slide => {
            slide.classList.remove('prev-slide')
        })
        activeSlide.classList.add('prev-slide')
        let nextSlide = slidesList[prevIndex] ? slidesList[prevIndex] : slidesList[0]
        nextSlide.classList.add('slide-active')
        nextSlide.classList.remove('prev-slide')
        let prevSlide = document.querySelector('.prev-slide')
        nextSlide.style.transform = `translate(calc(-${prevIndex * 100}% - ${30 * prevIndex}px))`
        prevSlide.style.transform = `translate(calc(-${prevIndex * 100}% - ${30 * prevIndex}px))`
        sliderPrev.style.display = "flex"
        sliderCount += 1
        if (!(sliderCount < (slidesList.length - 1))) {
            sliderNext.style.display = 'none'
        }
    }
})

sliderPrev.addEventListener('click', () => {
    let activeSlide = document.querySelector('.slide-active')
    let prevIndex = [...slidesList].indexOf(activeSlide) - 1

    if (prevIndex >= 0) {
        activeSlide.classList.remove('slide-active')
        slidesList.forEach(slide => {
            slide.classList.remove('prev-slide')
        })
        activeSlide.classList.add('prev-slide')
        let nextSlide = slidesList[prevIndex] ? slidesList[prevIndex] : slidesList[0]
        nextSlide.classList.add('slide-active')
        nextSlide.classList.remove('prev-slide')
        let prevSlide = document.querySelector('.prev-slide')
        nextSlide.style.transform = `translate(calc(-${prevIndex * 100}% - ${30 * prevIndex}px))`
        prevSlide.style.transform = `translate(calc(-${prevIndex * 100}% - ${30 * prevIndex}px))`
        if (prevIndex == 0) {
            sliderPrev.style.display = "none"
        }
        sliderCount -= 1
        if ((sliderCount < (slidesList.length - 1))) {
            sliderNext.style.display = 'flex'
        }
    }
})

sliderMainImg.addEventListener('mousedown', (event) => {
    startX = event.clientX;
    isSwiping = true;
});

document.addEventListener('mousemove', (event) => {
    if (!isSwiping) return;
});

document.addEventListener('mouseup', (event) => {
    if (!isSwiping) return;

    const endX = event.clientX;
    isSwiping = false;

    const deltaX = endX - startX;

    if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
            if (index > 0) {
                index -= 1;
                sliderMainImg.querySelectorAll('img').forEach(item => {
                    item.style.transform = `translate(-${100 * index}%)`;
                });
                sliderImgList.forEach(img => {
                    img.classList.remove('active');
                });
                sliderImgList[index].classList.add('active');

                activeImgItem = document.querySelector(".order__img-item.active")
                sliderImgList.forEach((a, ind) => {
                    if (a == activeImgItem && (ind == 7 || ind == 3)) {
                        let activeSlide = document.querySelector('.slide-active')
                        let prevIndex = [...slidesList].indexOf(activeSlide) - 1

                        if (prevIndex >= 0) {
                            activeSlide.classList.remove('slide-active')
                            slidesList.forEach(slide => {
                                slide.classList.remove('prev-slide')
                            })
                            activeSlide.classList.add('prev-slide')
                            let nextSlide = slidesList[prevIndex] ? slidesList[prevIndex] : slidesList[0]
                            nextSlide.classList.add('slide-active')
                            nextSlide.classList.remove('prev-slide')
                            let prevSlide = document.querySelector('.prev-slide')
                            nextSlide.style.transform = `translate(calc(-${prevIndex * 100}% - ${30 * prevIndex}px))`
                            prevSlide.style.transform = `translate(calc(-${prevIndex * 100}% - ${30 * prevIndex}px))`
                            if (prevIndex == 0) {
                                sliderPrev.style.display = "none"
                            }
                            sliderCount -= 1
                            if ((sliderCount < (slidesList.length - 1))) {
                                sliderNext.style.display = 'flex'
                            }
                        }
                    }
                })
            }
        }
        else {
            if (index < 11) {
                index += 1;
                sliderMainImg.querySelectorAll('img').forEach(item => {
                    item.style.transform = `translate(-${100 * index}%)`;
                });
                sliderImgList.forEach(img => {
                    img.classList.remove('active');
                });
                sliderImgList[index].classList.add('active');

                activeImgItem = document.querySelector(".order__img-item.active")
                sliderImgList.forEach((a, ind) => {
                    if (a == activeImgItem && ind !== 1 && ind % 4 == 0) {
                        let activeSlide = document.querySelector('.slide-active')
                        let prevIndex = [...slidesList].indexOf(activeSlide) + 1

                        if (slidesList.length > prevIndex) {
                            activeSlide.classList.remove('slide-active')
                            slidesList.forEach(slide => {
                                slide.classList.remove('prev-slide')
                            })
                            activeSlide.classList.add('prev-slide')
                            let nextSlide = slidesList[prevIndex] ? slidesList[prevIndex] : slidesList[0]
                            nextSlide.classList.add('slide-active')
                            nextSlide.classList.remove('prev-slide')
                            let prevSlide = document.querySelector('.prev-slide')
                            nextSlide.style.transform = `translate(calc(-${prevIndex * 100}% - ${30 * prevIndex}px))`
                            prevSlide.style.transform = `translate(calc(-${prevIndex * 100}% - ${30 * prevIndex}px))`
                            sliderPrev.style.display = "flex"
                            sliderCount += 1
                            if (!(sliderCount < (slidesList.length - 1))) {
                                sliderNext.style.display = 'none'
                            }
                        }
                    }
                })


            }
        }
    }
});

sliderMainImg.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
    isSwiping = true;
});

document.addEventListener('touchmove', (event) => {
    if (!isSwiping) return;
});

document.addEventListener('touchend', (event) => {
    if (!isSwiping) return;

    const endX = event.changedTouches[0].clientX;
    isSwiping = false;

    const deltaX = endX - startX;

    if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
            if (index > 0) {
                index -= 1;
                sliderMainImg.querySelectorAll('img').forEach(item => {
                    item.style.transform = `translate(-${100 * index}%)`;
                });
                sliderImgList.forEach(img => {
                    img.classList.remove('active');
                });
                sliderImgList[index].classList.add('active');

                activeImgItem = document.querySelector(".order__img-item.active")
                sliderImgList.forEach((a, ind) => {
                    if (a == activeImgItem && (ind == 7 || ind == 3)) {
                        let activeSlide = document.querySelector('.slide-active')
                        let prevIndex = [...slidesList].indexOf(activeSlide) - 1

                        if (prevIndex >= 0) {
                            activeSlide.classList.remove('slide-active')
                            slidesList.forEach(slide => {
                                slide.classList.remove('prev-slide')
                            })
                            activeSlide.classList.add('prev-slide')
                            let nextSlide = slidesList[prevIndex] ? slidesList[prevIndex] : slidesList[0]
                            nextSlide.classList.add('slide-active')
                            nextSlide.classList.remove('prev-slide')
                            let prevSlide = document.querySelector('.prev-slide')
                            nextSlide.style.transform = `translate(calc(-${prevIndex * 100}% - ${30 * prevIndex}px))`
                            prevSlide.style.transform = `translate(calc(-${prevIndex * 100}% - ${30 * prevIndex}px))`
                            if (prevIndex == 0) {
                                sliderPrev.style.display = "none"
                            }
                            sliderCount -= 1
                            if ((sliderCount < (slidesList.length - 1))) {
                                sliderNext.style.display = 'flex'
                            }
                        }
                    }
                })
            }
        }
        else {
            if (index < 11) {
                index += 1;
                sliderMainImg.querySelectorAll('img').forEach(item => {
                    item.style.transform = `translate(-${100 * index}%)`;
                });
                sliderImgList.forEach(img => {
                    img.classList.remove('active');
                });
                sliderImgList[index].classList.add('active');

                activeImgItem = document.querySelector(".order__img-item.active")
                sliderImgList.forEach((a, ind) => {
                    if (a == activeImgItem && ind !== 1 && ind % 4 == 0) {
                        let activeSlide = document.querySelector('.slide-active')
                        let prevIndex = [...slidesList].indexOf(activeSlide) + 1

                        if (slidesList.length > prevIndex) {
                            activeSlide.classList.remove('slide-active')
                            slidesList.forEach(slide => {
                                slide.classList.remove('prev-slide')
                            })
                            activeSlide.classList.add('prev-slide')
                            let nextSlide = slidesList[prevIndex] ? slidesList[prevIndex] : slidesList[0]
                            nextSlide.classList.add('slide-active')
                            nextSlide.classList.remove('prev-slide')
                            let prevSlide = document.querySelector('.prev-slide')
                            nextSlide.style.transform = `translate(calc(-${prevIndex * 100}% - ${30 * prevIndex}px))`
                            prevSlide.style.transform = `translate(calc(-${prevIndex * 100}% - ${30 * prevIndex}px))`
                            sliderPrev.style.display = "flex"
                            sliderCount += 1
                            if (!(sliderCount < (slidesList.length - 1))) {
                                sliderNext.style.display = 'none'
                            }
                        }
                    }
                })


            }
        }
    }
});

sliderMainImg.addEventListener('dragstart', (event) => event.preventDefault());

scrollContainer.addEventListener('wheel', (event) => {
    if (isScrolling) return;

    event.preventDefault();

    const scrollAmount = scrollContainer.scrollHeight / scrollContainer.childElementCount;
    const direction = event.deltaY > 0 ? 1 : -1;

    isScrolling = true;
    scrollContainer.scrollBy({
        top: direction * scrollAmount,
        behavior: 'smooth'
    });


    setTimeout(() => {
        isScrolling = false;
    }, 100);
}, { passive: false });

scrollContainer2.addEventListener('wheel', (event) => {
    if (isScrolling) return;

    event.preventDefault();

    const scrollAmount = scrollContainer2.scrollHeight / scrollContainer2.childElementCount;
    const direction = event.deltaY > 0 ? 1 : -1;

    isScrolling = true;
    scrollContainer2.scrollBy({
        top: direction * scrollAmount,
        behavior: 'smooth'
    });

    setTimeout(() => {
        isScrolling = false;
    }, 100);
}, { passive: false });

document.addEventListener('DOMContentLoaded', function () {
    calendarInit()
    sliderMainInit()
});

scrollContainer.addEventListener('mousedown', startDrag);
scrollContainer.addEventListener('mousemove', dragMove);
scrollContainer.addEventListener('mouseup', endDrag);
scrollContainer.addEventListener('mouseleave', endDrag);
scrollContainer.addEventListener('touchstart', startDrag);
scrollContainer.addEventListener('touchmove', dragMove);
scrollContainer.addEventListener('touchend', endDrag);
scrollContainer.addEventListener('touchcancel', endDrag);
scrollContainer.addEventListener('mousedown', startDrag);
scrollContainer.addEventListener('mousemove', dragMove);
scrollContainer.addEventListener('mouseup', endDrag);
scrollContainer.addEventListener('mouseleave', endDrag);
scrollContainer.addEventListener('touchstart', startDrag);
scrollContainer.addEventListener('touchmove', dragMove);
scrollContainer.addEventListener('touchend', endDrag);
scrollContainer.addEventListener('touchcancel', endDrag);
scrollContainer2.addEventListener('mousedown', startDrag2);
scrollContainer2.addEventListener('mousemove', dragMove2);
scrollContainer2.addEventListener('mouseup', endDrag2);
scrollContainer2.addEventListener('mouseleave', endDrag2);
scrollContainer2.addEventListener('touchstart', startDrag2);
scrollContainer2.addEventListener('touchmove', dragMove2);
scrollContainer2.addEventListener('touchend', endDrag2);
scrollContainer2.addEventListener('touchcancel', endDrag2);
scrollContainer2.addEventListener('mousedown', startDrag2);
scrollContainer2.addEventListener('mousemove', dragMove2);
scrollContainer2.addEventListener('mouseup', endDrag2);
scrollContainer2.addEventListener('mouseleave', endDrag2);
scrollContainer2.addEventListener('touchstart', startDrag2);
scrollContainer2.addEventListener('touchmove', dragMove2);
scrollContainer2.addEventListener('touchend', endDrag2);
scrollContainer2.addEventListener('touchcancel', endDrag2);