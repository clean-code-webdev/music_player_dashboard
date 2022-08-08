function openNav() {
  const btn = document.querySelector("#nav-open");
  const nav = document.querySelector("#main-nav");

  btn.addEventListener("click", () => {
    nav.classList.add("show-nav");
    nav.classList.remove("hide-nav");
  });
}

function closeNav() {
  const btn = document.querySelector("#nav-close");
  const nav = document.querySelector("#main-nav");

  btn.addEventListener("click", () => {
    nav.classList.add("hide-nav");
    nav.classList.remove("show-nav");
  });
}

openNav();
closeNav();
