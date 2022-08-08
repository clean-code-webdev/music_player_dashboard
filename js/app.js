function openNav() {
  const btn = document.querySelector("#nav-open");
  const nav = document.querySelector("#main-nav");

  btn.addEventListener("click", () => {
    nav.classList.add("show-nav");
    nav.classList.remove("hide-nav");

    console.log(nav);
  });
}

openNav();
