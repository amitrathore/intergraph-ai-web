// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

// Highlight the current page in the nav
const page = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".site-nav a").forEach((link) => {
  if (link.getAttribute("href") === page) {
    link.setAttribute("aria-current", "page");
  }
});

// Contact form: compose a mailto (no backend)
const form = document.querySelector("#contact-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const subject = (data.get("subject") || "").toString().trim() || "Intergraph inquiry";
    const message = (data.get("message") || "").toString().trim();

    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");

    window.location.href = `mailto:hello@intergraph.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
