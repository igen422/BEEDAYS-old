$(function () {

  //  -----------------------------
  //  スクロールでheaderリサイズ
  //  動きがカクカクするので治療法を調べること。
  //  2020/ 10 / 1
  //  -----------------------------
  // $(window).scroll(function () {
  //   if ($(window).scrollTop() > 100) {
  //     // $("h1").css("visibility", "visible");
  //     $("h1").fadeIn(900);

  //     $("#pcnav-list-btn").addClass("pcnav-small");
  //   } else {
  //     // $("h1").css("visibility", "hidden");
  //     $("h1").fadeOut(900);

  //     $("#pcnav-list-btn").removeClass("pcnav-small");
  //   }
  // });


  //  -----------------------------
  //  スクロールでふわっと表示。
  //  ３方向を揃えています。
  //  -----------------------------
  $(window).scroll(function () {
    // 上にふわっと表示
    $(".effect-fade-up").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("effect-scroll");
      }
    });

    //  左にふわっと表示
    $(".effect-fade-l").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("effect-scroll");
      }
    });

    // 右にふわっと表示
    $(".effect-fade-r").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("effect-scroll");
      }
    });


  });
});
