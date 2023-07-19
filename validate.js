document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact__form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (
      nameInput.value === "" ||
      emailInput.value === "" ||
      subjectInput.value === "" ||
      messageInput.value === ""
    ) {
      alert("Por favor, preencha todos os campos.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert("Por favor, insira um endereço de e-mail válido.");
      return false;
    }

    alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
    form.reset();
    return true;
  });
});
