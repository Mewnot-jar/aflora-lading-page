const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");
const scrollButtons = document.querySelectorAll("[data-scroll]");
const form = document.querySelector(".form");
const message = document.querySelector(".form__message");
const yearEl = document.getElementById("year");

yearEl.textContent = new Date().getFullYear();

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("is-open");
});

scrollButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.scroll);
    target?.scrollIntoView({ behavior: "smooth" });
    navLinks.classList.remove("is-open");
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  if (!data.nombre || !data.email || !data.proyecto) {
    message.textContent = "Completa todos los campos.";
    message.style.color = "#d94b09";
    return;
  }
  message.textContent = "¡Gracias! Te contactaremos pronto.";
  message.style.color = "#0c8c4a";
  form.reset();
});