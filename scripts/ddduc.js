function horrorDoki() {
    var timeout = getRandomInt(3000, 10000);
    setTimeout(function () {
        $(".img").attr("src", "sources/images/oops2.png");
    }, timeout);
    setTimeout(function () {
        $(".img").attr("src", "sources/images/Casual_Monika.jpg");
        horrorDoki();
    }, timeout + getRandomInt(50, 150));
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
$(function () {
    horrorDoki();
});
