/* =======================================================
   いちごのほっぺ農園 — main.js
   スクロールで要素をふわっと表示する処理
   ======================================================= */

document.addEventListener('DOMContentLoaded', function () {
  // ヒーロー背景スライドショー（6秒ごとに切り替え）
  var heroSlides = document.querySelectorAll('.hero-slide');
  if (heroSlides.length > 0) {
    var heroIndex = 0;
    heroSlides[0].classList.add('active');
    setInterval(function () {
      heroSlides[heroIndex].classList.remove('active');
      heroIndex = (heroIndex + 1) % heroSlides.length;
      heroSlides[heroIndex].classList.add('active');
    }, 6000);
  }

  var targets = document.querySelectorAll('.reveal');

  // IntersectionObserver が使える環境ではスクロール連動で表示
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    targets.forEach(function (el) { io.observe(el); });
  } else {
    // 非対応ブラウザではそのまま表示
    targets.forEach(function (el) { el.classList.add('in'); });
  }
});
