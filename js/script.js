document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".menu-button");
    const navigation = document.querySelector(".navigation");

    if (!menuButton || !navigation) return;

    // MENUを押したとき
    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("menu-open");

    });

    // メニュー内のリンクを押したとき
    const menuLinks = navigation.querySelectorAll("a");

    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("menu-open");

        });

    });

});