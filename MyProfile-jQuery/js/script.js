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
    arrows: false,
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

  // スクロールしたときにTOPに戻るボタンを表示させる
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".pagetop").fadeIn();
    } else {
      $(".pagetop").fadeOut();
    }
  });
  $(".pagetop").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});

// ページ内リンクのスクロールをなめらかにする
$(function () {
  $('a[href^="#"]').click(function () {
    const speed = 500;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("html,body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});


// スクロールしたときにセクションをフェードインさせる
$(function () {
  $(window).scroll(function () {
    const wHeight = $(window).height();
    const wScroll = $(window).scrollTop();
    $(".block").each(function () {
      const bPosition = $(this).offset().top;
      if (wScroll > bPosition - wHeight + 200) {
        $(this).addClass("fadeIn");
      }
    });
  });
});

// Worksの画像をクリックしたときにモーダルで拡大表示する
$(document).ready(function() {
  // モーダル
  $('.modalimg').on('click', function(event) {
    event.preventDefault();
    const imgSrc = $(this).find('img').attr('src');
    $('.bigimg').attr('src', imgSrc);
    $('.modal').fadeIn();
    $('body,html').css('overflow', 'hidden');
  });

  // 閉じるボタン
  $('.modalclose').on('click', function() {
    $('.modal').fadeOut();
    $('body,html').css('overflow-y', 'visible');
  });

  // モーダル外をクリックした場合
  $(window).on('click', function(event) {
    if ($(event.target).hasClass('modal')) {
      $('.modal').fadeOut();
      $('body,html').css('overflow', 'auto');
    }
  });
});


