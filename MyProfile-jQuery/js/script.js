$(function () {
  // カルーセル
  $(".carousel").slick({
    autoplay: true,
    fade: true,
    speed: 2000,
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    swipe: true,
    arrows: true,
  });

  // リンクのホバー時に不透明度をアニメーションで変更する
  $(".hover").on("mouseover", function () {
    $(this).animate(
      {
        opacity: 0.5,
      },
      100
    );
  });
  $(".hover").on("mouseout", function () {
    $(this).animate(
      {
        opacity: 1.0,
      },
      100
    );
  });
});
