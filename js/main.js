//스크롤시 헤더 배경색이 들어감. 
$(window).scroll(function () {
    $("#header_wrap").addClass("scroll");
    if ($(window).scrollTop() == 0) {
        $("#header_wrap").removeClass("scroll");
    }

});
//햄버거 버튼을 누르면 메뉴가 보인다
$(".m_menuBtn").click(function () {
    $(this).toggleClass("on");

    if ($(this).hasClass('on')) {
        $(".menu_container").fadeIn();
        $("body").css({ "overflow": "hidden" })
    } else {
        $(".menu_container").fadeOut();
        $("body").css({ "overflow": "auto" })
    }
});
$(window).resize(function () {
    let winW = $(window).width(); /*브라우저의 가로길이를 잰다*/
    if (winW >= 1023 && $(".menu_container").is(":hidden")) {
        console.log(".menu_container가 안보여요");
        $(".menu_container").removeAttr("style");
    }
});