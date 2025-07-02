// Simulação simples de login (exemplo para Firebase futuramente)
function login(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (email === "admin@embracell.com" && senha === "admin123") {
    window.location.href = "painel-admin.html";
  } else if (email === "tecnico@embracell.com" && senha === "tecnico123") {
    window.location.href = "painel-tecnico.html";
  } else {
    alert("Login inválido. Tente novamente.");
  }
}