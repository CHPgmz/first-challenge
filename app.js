const form = document.getElementById("form");
const btnEncriptar = document.querySelector("#encriptar");
const btnDecrifrar = document.querySelector("#decifrar");
const buttonCP = document.getElementById("button");
const elmCnt = document.getElementById("elm-cnt");

window.addEventListener("load", () => {
  if(screen.width < 750){
    elmCnt.classList.add('element-container-disabled');
  }
  
});
//para cifrar el texto
form.addEventListener("submit", setText);
function setText(e) {
  const texto = document.getElementById("texto").value;
  setCript(texto.toLowerCase());
  //  setDecrypt(texto);
  form.reset();
  e.preventDefault();
}

btnDecrifrar.addEventListener("click", (e) => {
  const texto = document.getElementById("texto").value;

  if (texto.length === 0) {
    alert("Ingresaste valores nulos o valores invalidos. \nRevisa y corrija el formulario");
  } else {
    setDecrypt(texto.toLowerCase());
  }
  form.reset();
  e.preventDefault();
});

const claves = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

function setCript(texto) {
  const txtCifrado = document.getElementById("texto-cifrado");
  const button = document.getElementById("button");
  if(screen.width < 750){
  elmCnt.classList.remove("element-container-disabled");
  elmCnt.classList.add("element-container");
  button.classList.remove("disabled");
  button.classList.add("active");

  }else if(screen.width >= 750){  
  button.classList.remove("disabled");
  button.classList.add("active");
  }
  txtCifrado.classList.add("cifrado");

  let frase = " ";
  for (const i in claves) {
    frase = texto.replaceAll(i, claves[i]);
    texto = frase;
  }

  txtCifrado.textContent = frase;
}

function setDecrypt(texto) {
  const txtCifrado = document.getElementById("texto-cifrado");
  const button = document.getElementById("button");
  //console.log(txtCifrado);
  let frase = " ";
  if(screen.width < 750){
  elmCnt.classList.remove("element-container-disabled");
  elmCnt.classList.add("element-container");
  button.classList.remove("disabled");
  button.classList.add("active");

  }else if(screen.width >= 750){  
  button.classList.remove("disabled");
  button.classList.add("active");
  }

  txtCifrado.classList.add("cifrado");

  for (const i in claves) {
    frase = texto.replaceAll(claves[i], i);
    texto = frase;
  }
  txtCifrado.textContent = frase;
}

buttonCP.addEventListener("click", (e) => {
  let txtCopied = document.querySelector("#texto-cifrado");
  let msj = document.querySelector("#msj");
  msj.classList.remove("msj-disabled");
  msj.classList.add("msj-active");
  let copied = txtCopied.innerHTML;
  navigator.clipboard.writeText(copied);

  setTimeout(() => {
    msj.classList.remove("msj-active");
  }, 3000);
  //console.log(copied);
});
