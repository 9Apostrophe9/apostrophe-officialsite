document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".menu-button");
    const mobileMenuButton = document.querySelector(".mobile-menu-button");
    const navigation = document.querySelector(".navigation");

    if (!navigation) {
        return;
    }

    // PC側・元のMENUボタン
    if (menuButton) {
        menuButton.addEventListener("click", function () {
            navigation.classList.toggle("menu-open");
        });
    }

    // スマホ下部のMENUボタン
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener("click", function () {
            navigation.classList.toggle("menu-open");
        });
    }

    // メニュー内のリンクを押したらMENUを閉じる
    navigation.addEventListener("click", function (event) {

        const link = event.target.closest("a");

        if (link) {
            navigation.classList.remove("menu-open");
        }

    });

});