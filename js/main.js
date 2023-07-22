document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  let lastScrollPos = window.scrollY;

  function handleScroll() {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > lastScrollPos) {
      // Scrolling down, hide the header
      header.classList.add("hidden");
    } else {
      // Scrolling up, show the header
      header.classList.remove("hidden");
    }

    lastScrollPos = currentScrollPos;
  }

  window.addEventListener("scroll", handleScroll);
});
