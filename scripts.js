document.addEventListener("DOMContentLoaded", function () {
  loadComponent("header-container", "header.html");
  loadComponent("footer-container", "footer.html");
});

function loadComponent(containerId, filePath) {
  fetch(filePath)
      .then(response => response.text())
      .then(data => {
          document.getElementById(containerId).innerHTML = data;
      })
      .catch(error => console.error("Error loading "+ filePath +":", error));
}

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
  });
});
