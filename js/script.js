document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".menu-button");
    const navigation = document.querySelector(".navigation");
    const navigationLinks = document.querySelectorAll(".navigation a");

    // MENUを開閉
    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("menu-open");
    });

    // メニュー内のリンクを選択したらMENUを閉じる
    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navigation.classList.remove("menu-open");
        });
    });

});