let nota = {
  descripcion: null,
  valor: 0,
  porcentaje: 0,
};
let nota1 = {
  porcentajeBase: 0.3,
  definitiva: 0,
  notas: nota[0],
};
let nota2 = {
  porcentajeBase: 0.3,
  definitiva: 0,
  notas: nota[0],
};
let nota3 = {
  notas: nota[0],
  porcentajeBase: 0.4,
  definitiva: 0,
};

let materia = {
  nombre: null,
  nota1: nota1,
  nota2: nota2,
  nota3: nota3,
  definitiva: 0,
};
function llenarTabla() {
  var materias = [];
  materias = localStorage.getItem("Materias");
  localStorage.setItem("Materias", JSON.stringify(materias));
  var tbody = null;
  tbody = document.getElementById("datos");
  materias = recibirValoresMaterias();
  for (var i = 0; i < materias.length; i++) {
    materia = Mapear(materia);
    var fila = document.createElement("tr");
    var celdaNombre = document.createElement("td"),
      celdaNota1 = document.createElement("td"),
      celdaNota2 = document.createElement("td"),
      celdaNota3 = document.createElement("td"),
      celdaNotaDef = document.createElement("td"),
      celdaAccion = document.createElement("td");
    var nodoTextoNombre = document.createTextNode(materias[i].nombre),
      nodoTextoNota1 = document.createTextNode(materias[i].nota1.definitiva),
      nodoTextoNota2 = document.createTextNode(materias[i].nota2.definitiva),
      nodoTextoNota3 = document.createTextNode(materias[i].nota3.definitiva),
      nodoTextoNotaDef = document.createTextNode(materias[i].definitiva),
      nodoAccion = document.createElement("a");
    nodoAccion.innerHTML =
      '<a href="paginas/editar.html" onclick="verMateria(' +
      i +
      ')">Ver</a>' +
      " / " +
      '<a href="#" onclick="eliminarMateria(' +
      i +
      ')">Eliminar</a>';
    celdaNombre.appendChild(nodoTextoNombre);
    celdaNota1.appendChild(nodoTextoNota1);
    celdaNota2.appendChild(nodoTextoNota2);
    celdaNota3.appendChild(nodoTextoNota3);
    celdaNotaDef.appendChild(nodoTextoNotaDef);
    celdaAccion.appendChild(nodoAccion);
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaNota1);
    fila.appendChild(celdaNota2);
    fila.appendChild(celdaNota3);
    fila.appendChild(celdaNotaDef);
    fila.appendChild(celdaAccion);
    tbody.appendChild(fila);
  }
}
let materias = [];

function eliminarMateria(i) {
  materias = JSON.parse(localStorage.getItem("Materias"));
  materias.splice(i, 1);
  localStorage.removeItem("Materias");
  localStorage.setItem("Materias", JSON.stringify(materias));
  materias.forEach((materia) => {
    console.log(materia.nombre);
  });
  llenarTabla();
}
function verMateria(i) {
  console.log(i);
  localStorage.setItem("index", JSON.stringify(i));
}
function Mapear(materiaP) {
  if (materiaP) {
    materia.nombre = materiaP.nombre;
    materia.nota1 = materiaP.nota1;
    materia.nota2 = materiaP.nota2;
    materia.nota3 = materiaP.nota3;
    materia.definitiva = materiaP.definitiva;
    return materia;
  }
}
function encontrarIndex() {
  var tabla = document.getElementById("tr");
  var index = tabla.tabIndex;
  console.log(index);
}
function recibirValoresMaterias() {
  materias = [];
  if (localStorage.getItem("Materias")) {
    materias = JSON.parse(localStorage.getItem("Materias"));
    return materias;
  } else {
    alert("No existen datos");
    return undefined;
  }
}
