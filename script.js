const buttonSubtracao = document.getElementById("button-subtracao");
const contador = document.getElementById("contador-principal");
const buttonSoma = document.getElementById("button-soma");

let value = contador.value;

buttonSoma.addEventListener("click", () => {
  value = ++value;
  contador.value = value;
});

buttonSubtracao.addEventListener("click", () => {
  value = value !== 0 ? --value : value;
  contador.value = value;
});
