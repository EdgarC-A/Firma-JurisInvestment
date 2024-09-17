document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector(".loader-wrapper");
  loader.style.opacity = "1"; // Asegúrate de que el loader esté visible
});

window.addEventListener("load", function () {
  const loader = document.querySelector(".loader-wrapper");
  setTimeout(function () {
    loader.style.opacity = "0"; // Oculta el loader suavemente después de 2 segundos
    setTimeout(function () {
      loader.style.display = "none"; // Oculta el loader completamente después de la transición
    }, 500); // Espera a que la transición de opacidad termine
  }, 2000); // 2000 milisegundos = 2 segundos
});
