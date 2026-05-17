(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealElements = document.querySelectorAll(".reveal");

  if (!revealElements.length) return;

  if (prefersReducedMotion) {
    revealElements.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.08,
    }
  );

  revealElements.forEach(function (el) {
    observer.observe(el);
  });

  /* 커피챗: href가 # 일 때 클릭 방지 (구글 폼 연결 전) */
  var coffeeChat = document.getElementById("coffee-chat");
  if (coffeeChat && (coffeeChat.getAttribute("href") === "#" || coffeeChat.getAttribute("href") === "")) {
    coffeeChat.addEventListener("click", function (e) {
      e.preventDefault();
    });
  }
})();
