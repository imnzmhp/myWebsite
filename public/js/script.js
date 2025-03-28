document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    hamburgerMenu.classList.toggle("active"); // ハンバーガーメニューの状態を切り替え
  });
});
