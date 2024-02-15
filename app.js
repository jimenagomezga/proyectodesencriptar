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
  // limpiarCaja()
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

// function copiarMensaje() {
//   let mensajeACopiar = document.getElementById("title_text2");
//   let button = document.querySelector("btn_copiar")

//   mensajeACopiar.select()
//   document.execCommand("copy")
//   button.innertText = "Copiado"
//   console.log(mensajeACopiar)
// }


// mensajeACopiar = document.getElementById("title_text2").innerHTML;
// const copiarContenido = async () => {
//   try {
//     await navigator.clipboard.writeText(mensajeACopiar);
//     console.log('Contenido copiado al portapapeles');
//   } catch (err) {
//     console.error('Error al copiar: ', err);
//   }
// }


// (".btn_copiar").addEventListener("click", async () => {
//   await navigator.clipboard.writeText(section_2text.value)
//   alert('Copiado');
// })


document.querySelector(".btn_copiar").addEventListener("click", function () {
  let copiarTexto = document.querySelector("h3").innerHTML;
  navigator.clipboard.writeText(copiarTexto).then(() => {
    alert("Se copio este texto")
  })
})
