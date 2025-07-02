function consultarOS() {
  const codigo = document.getElementById('codigoOS').value.trim();
  const resultado = document.getElementById('resultado');

  if (codigo === '') {
    resultado.innerHTML = '<p style="color: yellow;">Por favor, digite o código da OS.</p>';
    return;
  }

  // Mensagem fictícia (modo offline)
  resultado.innerHTML = `
    <p style="color: red;">⚠️ Ordem de Serviço não encontrada.</p>
    <p style="color: white;">Verifique o código informado ou entre em contato com a Embracell Company.</p>
  `;
}