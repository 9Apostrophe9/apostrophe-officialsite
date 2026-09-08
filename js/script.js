document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".menu-button");
    const navigation = document.querySelector(".navigation");

    if (!menuButton || !navigation) {
        return;
    }

    // MENUを開閉
    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("menu-open");
    });

    // メニューのリンクをクリックしたら閉じる
    navigation.addEventListener("click", function (event) {

        if (event.target.closest("a")) {
            navigation.classList.remove("menu-open");
        }

    });

});