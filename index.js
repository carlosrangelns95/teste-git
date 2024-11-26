// Adiciona evento de clique no botão "Saiba mais"
document.querySelector("button").addEventListener("click", function () {
  alert("Em breve!");
});

// Validação do formulário
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  var nome = document.querySelector("input[type='nome']").value;
  var email = document.querySelector("input[type='email']").value;
  var mensagem = document.querySelector("textarea").value;

  if (nome === "" || email === "" || mensagem === "") {
    alert("Preencha todos os campos!");
  } else {
    alert("Mensagem enviada!");
  }
});
