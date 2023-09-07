window.addEventListener("load", function () {
  const loadingContainer = document.querySelector(".loading-container");
  const mainContent = document.querySelector(".main-content");

  setTimeout(function () {
    loadingContainer.style.display = "none";
    mainContent.style.display = "block";
  }, 2000);
});
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
