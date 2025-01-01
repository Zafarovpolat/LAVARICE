let previewMenuList = document.querySelectorAll('.preview__menu');

previewMenuList.forEach((previewMenu) => {
    previewMenu.addEventListener('click', () => {
        previewMenu.classList.toggle('active');
        previewMenu.querySelector(".preview__menu-btn").src = previewMenu.classList.contains('active') ? "./assets/img/minus.svg" : "./assets/img/plus.svg";
    });
});