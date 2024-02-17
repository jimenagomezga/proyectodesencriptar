function mensajeAencriptar() {
  let mensajeInicial = document.querySelector("input").value;
  let mensajeEncriptado = mensajeInicial
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  document.getElementById("section_2imagen").style.display = "none";
  document.querySelector(".section_2text").style.display = "none";
  document.querySelector("h3").innerHTML = mensajeEncriptado;
  document.querySelector(".btn_copiar").style.display = "show";
  document.querySelector(".btn_copiar").style.display = "inherit";
  limpiarCaja()
  return;
}

function limpiarCaja() {
  document.querySelector("input").value = "";
}

function mensajeADesencriptar() {
  let mensajeInicial = document.querySelector("input").value;
  let mensajeEncriptado = mensajeInicial
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  document.getElementById("section_2imagen").style.display = "none";
  document.querySelector(".section_2text").style.display = "none";
  document.querySelector("h3").innerHTML = mensajeEncriptado;
  document.querySelector(".btn_copiar").style.display = "show";
  document.querySelector(".btn_copiar").style.display = "inherit";

  return;
}

document.querySelector(".btn_copiar").addEventListener("click", function () {
  let copiarTexto = document.querySelector("h3").innerHTML;
  navigator.clipboard.writeText(copiarTexto).then(() => {
    alert("Se copio este texto")
  })
})
