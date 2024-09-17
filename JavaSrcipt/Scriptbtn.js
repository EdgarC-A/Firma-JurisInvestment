window.onscroll = function () {
  showScrollButton();
};

// Mostrar el botón al llegar al final de la página
function showScrollButton() {
  var scrollButton = document.getElementById("scrollButton");
  var scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;
  var documentHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  if (scrollPosition > documentHeight - 100) {
    scrollButton.style.display = "block";
    scrollButton.classList.add("fade-in");
  } else {
    scrollButton.style.display = "none";
  }
}

// Agregar evento de clic al botón
document.getElementById("scrollButton").addEventListener("click", function () {
  // Ejemplo: Volver al inicio de la página
  window.scrollTo({ top: 0, behavior: "smooth" });
});
