window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    // Cambia el valor según tus necesidades
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
