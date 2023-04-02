// Array de películas
var peliculas = [];
      
// Función para agregar una película al array
function agregarPelicula() {
  // Obtener valores del formulario
  var nombre = document.getElementById("nombre").value;
  var anio = document.getElementById("anio").value;
  
  // Crear objeto de película con id generado automáticamente
  var id = peliculas.length + 1;
  var pelicula = {
    id: id,
    nombre: nombre,
    anio: anio
  };
  
  // Agregar película al array
  peliculas.push(pelicula);

  // Limpiar inputs de nombre y año
  document.getElementById("nombre").value = "";
  document.getElementById("anio").value = "";
  
  // Actualizar listado de películas en la página
 // actualizarListado();
}

// Función para actualizar el listado de películas en la página
function actualizarListado() {
  // Obtener elemento UL donde se mostrarán las películas
  var ul = document.getElementById("peliculas");
  
  // Limpiar listado anterior
  ul.innerHTML = "";
  
  // Recorrer array de películas y crear elementos LI para cada una
  peliculas.forEach(function(pelicula) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(pelicula.nombre + " (" + pelicula.anio + ")"));
    ul.appendChild(li);
  });
}

      // Función para ordenar las películas
      var ordenAscendente = true;
      function ordenarPeliculas() {
        if (ordenAscendente) {
          peliculas.sort(function(a, b) {
            return a.nombre.localeCompare(b.nombre);
          });
        } else {
          peliculas.sort(function(a, b) {
            return b.nombre.localeCompare(a.nombre);
          });
        }
        ordenAscendente = !ordenAscendente;
        actualizarListado();
      }

 // Función para eliminar una película del array por su id
function eliminarPelicula() {
  // Obtener el id de la película a eliminar
  var id = document.getElementById("id").value;

  // Buscar la película en el array por su id y eliminarla
  for (var i = 0; i < peliculas.length; i++) {
    if (peliculas[i].id == id) {
      peliculas.splice(i, 1);
      break;
    }
  }

  // Limpiar input de id
  document.getElementById("id").value = "";

  // Actualizar listado de películas en la página
  actualizarListado();
}
      