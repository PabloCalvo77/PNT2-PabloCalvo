// Declaracion Const

const botonAgregar = document.getElementById("agregarNumero");
const botonMostrar = document.getElementById("mostrarNumeros");
const botonOrdenar = document.getElementById("ordenarNumero");
const numeros = document.getElementById("numeros");
const inputValidar = document.getElementById("validarNumero");
const BotonValidar = document.getElementById("botonValidar");
const fondo = document.getElementById("fondo");

// Creamos un vector para almacenar los números
const numberList = [];

// Agregar numeros
botonAgregar.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  numberList.push(randomNumber);
});

// Mostrar numeros
botonMostrar.addEventListener("click", () => {
    numeros.textContent = numberList.join(", ");
  });

// Ordenar numeros
botonOrdenar.addEventListener("click", () => {
    numberList.sort((a, b) => a - b);
  
  });

  // Validar numeros
BotonValidar.addEventListener("click", () => {
    const numberToCheck = Number(inputValidar.value);
    if (numberList.includes(numberToCheck)) {
      fondo.style.backgroundColor = "green";
    } else {
      fondo.style.backgroundColor = "red";
    }
  });

