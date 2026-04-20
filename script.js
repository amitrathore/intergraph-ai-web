const form = document.querySelector("#contact-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const msg = (data.get("msg") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    const subject = msg || "Intergraph inquiry";
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      msg ? `Msg: ${msg}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:hello@intergraph.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
