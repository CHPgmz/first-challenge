const form = document.getElementById("form");
const btnEncriptar = document.querySelector("#encriptar");
const btnDecrifrar = document.querySelector("#decifrar");

//para cifrar el texto
btnEncriptar.addEventListener("submit", getText);
function getText(e) {
  const texto = document.getElementById("texto").value;
  setCript(texto);
  form.reset();
  e.preventDefault();
}
//Para decifrar el texto
btnDecrifrar.addEventListener("submit", decrypt);
function decrypt(e) {
  const texto = document.getElementById("texto").value;
  setDecrypt(texto);
  form.reset();
  e.preventDefault;
}

const claves = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

function setCript(texto) {
  const txtCifrado = document.getElementById("texto-cifrado");

  let frase = " ";
  for (const i in claves) {
    frase = texto.replaceAll(i, claves[i]);
    texto = frase;
  }

  txtCifrado.textContent = frase;
}

function setDecrypt(texto) {
  const txtCifrado = document.getElementById("texto-cifrado");
  let frase = " ";
  for (const i in claves) {
    frase = texto.replaceAll(claves[i], i);
    texto = frase;
  }

  txtCifrado.textContent = frase;
}
