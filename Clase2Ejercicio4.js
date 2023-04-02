function convertirAMayusculas() {
    var frase = document.getElementById("frase").value;
    var fraseMayusculas = frase.toUpperCase();
    document.getElementById("resultado").textContent = fraseMayusculas;
  }