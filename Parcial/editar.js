function guardarNombreMateria() {
  var nombre = document.getElementById("NombreMateria").value;
  localStorage.setItem("NombreMateria", JSON.stringify(nombre));
}

function obtenerMateria() {
  var materiaBuscada = null;
  materias = JSON.parse(localStorage.getItem("Materias"));
  index = JSON.parse(localStorage.getItem("index"));
  console.log(index);
  for (let i = 0; i < materias.length; i++) {
    if (i == index) {
      materiaBuscada = materias[i];
    }
  }
  if (materiaBuscada) {
    materia = materiaBuscada;
    localStorage.setItem("MateriaEditar", JSON.stringify(materia));
  } else {
    alert("Materia no encontrada");
  }
  cargarDatosMateria();
}
function cargarDatosMateria() {
  materia = JSON.parse(localStorage.getItem("MateriaEditar"));
  console.log(materia.nombre);
  document.getElementById("NombreMateria").value = materia.nombre;
}
var a = 0;
function cargarDatosN1() {
  guardarNombreMateria();
  materia = JSON.parse(localStorage.getItem("MateriaEditar"));
  console.log(materia.nombre);
  cargarNotas(materia.nota1.notas.notas);
  materia.nota1.notas.notas.forEach((element) => {
    console.log(element);
  });
}
function cargarDatosN2() {
  guardarNombreMateria();
  materia = JSON.parse(localStorage.getItem("MateriaEditar"));
  cargarNotas(materia.nota2.notas.notas);
}
function cargarDatosN3() {
  guardarNombreMateria();
  materia = JSON.parse(localStorage.getItem("MateriaEditar"));
  cargarNotas(materia.nota3.notas.notas);
}
function cargarNotas1() {
  materia = JSON.parse(localStorage.getItem("MateriaEditar"));
  var notas = materia.nota1.notas.notas;
  document.getElementById("eliminar").remove();
  a = 0;
  for (let i = 0; i < notas.length; i++) {
    var texto = document.createElement("div");
    texto.className = "row";
    texto.id = a;
    texto.innerHTML =
      '<div class="col-sm-3"> <input type="text" class="form-control" id="Nombre' +
      a +
      '"> </div> <div class="col-sm-3"> <input type="number" class="form-control" id="Valor' +
      a +
      '"> </div> <div class="col-sm-3"> <input type="number" class="form-control" id="Porcentaje' +
      a +
      '"> </div> <div class="col-sm-1"> <button onclick="return nuevaNota()" class="btn btn-success">+</button> </div> <div class="col-sm-1"> <button return onclick="eliminarNota(' +
      a +
      ')" id="idNotaEliminar' +
      a +
      '" class="btn btn-danger">-</button> </div> <br> <br>';
    document.getElementById("padre").appendChild(texto);
    document.getElementById("Nombre" + a).value(notas[i].descripcion);
    document.getElementById("Valor" + a).value(notas[i].valor);
    document.getElementById("Porcentaje" + a).value(notas[i].porcentaje);
    a++;
  }
  return false;
}
function nuevaNota() {
  var texto = document.createElement("div");
  texto.className = "row";
  texto.id = a;
  texto.innerHTML =
    '<div class="col-sm-3"> <input type="text" class="form-control" id="Nombre' +
    a +
    '"> </div> <div class="col-sm-3"> <input type="number" class="form-control" id="Valor' +
    a +
    '"> </div> <div class="col-sm-3"> <input type="number" class="form-control" id="Porcentaje' +
    a +
    '"> </div> <div class="col-sm-1"> <button onclick="return nuevaNota()" class="btn btn-success">+</button> </div> <div class="col-sm-1"> <button return onclick="eliminarNota(' +
    a +
    ')" id="idNotaEliminar' +
    a +
    '" class="btn btn-danger">-</button> </div> <br> <br>';
  document.getElementById("padre").appendChild(texto);
  a++;
  return false;
}
function eliminarNota(e) {
  var elementoAEliminar = document.getElementById(e);
  document.getElementById("padre").removeChild(elementoAEliminar);
  return false;
}
let notas = [];
var porcentajeT;
function agregarNotasPC() {
  porcentajeT = parseInt(document.getElementById("Porcentaje").value);
  console.log(porcentajeT);
  for (let i = 0; i < a; i++) {
    var element = parseInt(document.getElementById("Porcentaje" + i).value);
    porcentajeT += element;
    console.log(porcentajeT);
  }
  if (porcentajeT == 100) {
    for (let i = 0; i < a; i++) {
      var nombre = document.getElementById("Nombre" + i).value;
      var valor = document.getElementById("Valor" + i).value;
      var porcentaje = document.getElementById("Porcentaje" + i).value;
      nota.descripcion = nombre;
      nota.valor = valor;
      console.log(valor);
      nota.porcentaje = porcentaje;
      notas.push({ ...nota });
    }
    nota.descripcion = document.getElementById("Nombre").value;
    nota.valor = document.getElementById("Valor").value;
    nota.porcentaje = document.getElementById("Porcentaje").value;
    notas.push({ ...nota });
  }
  nota1 = JSON.parse(localStorage.getItem("notasPC"));
  nota1.notas = notas;
  localStorage.removeItem("notasPC");
  localStorage.setItem("notasPC", JSON.stringify(nota1));
  alert("Datos guardados");
}
function agregarNotasSC() {
  porcentajeT = 0;
  for (let i = 0; i < a; i++) {
    var element = document.getElementById("Porcentaje" + a);
    porcentajeT += element;
  }
  if (porcentajeT == 100) {
    for (let i = 0; i < a; i++) {
      var nombre = document.getElementById("Nombre" + a);
      var valor = document.getElementById("Valor" + a);
      var porcentaje = document.getElementById("Porcentaje" + a);
      nota.descripcion = nombre;
      nota.valor = valor;
      console.log(valor);
      nota.porcentaje = porcentaje;
    }
    notas.push(nota);
  }
  nota.descripcion = document.getElementById("Nombre").value;
  nota.valor = document.getElementById("Valor").value;
  nota.porcentaje = document.getElementById("Porcentaje").value;
  notas.push({ ...nota });
  nota2 = JSON.parse(localStorage.getItem("notasSC"));
  nota2.notas = notas;
  localStorage.removeItem("notasSC");
  localStorage.setItem("notasSC", JSON.stringify(nota2));
  alert("Datos guardados");
}
function agregarNotasTC() {
  porcentajeT = 0;
  for (let i = 0; i < a; i++) {
    var element = document.getElementById("Porcentaje" + a);
    porcentajeT += element;
  }
  if (porcentajeT == 100) {
    for (let i = 0; i < a; i++) {
      var nombre = document.getElementById("Nombre" + a);
      var valor = document.getElementById("Valor" + a);
      var porcentaje = document.getElementById("Nombre" + a);
      nota.descripcion = nombre;
      nota.valor = valor;
      console.log(valor);
      nota.porcentaje = porcentaje;
    }
    notas.push(nota);
  }
  nota.descripcion = document.getElementById("Nombre").value;
  nota.valor = document.getElementById("Valor").value;
  nota.porcentaje = document.getElementById("Porcentaje").value;
  notas.push({ ...nota });
  nota3 = JSON.parse(localStorage.getItem("notasTC"));
  nota3.notas = notas;
  localStorage.removeItem("notasTC");
  localStorage.setItem("notasTC", JSON.stringify(nota3));
  alert("Datos guardados");
}
function obtenerNombreMateria() {
  var nombreMateria = JSON.parse(localStorage.getItem("NombreMateria"));
  console.log(nombreMateria);
  localStorage.setItem(nombreMateria, JSON.stringify(materia));
  return nombreMateria;
}

let materias = [];
function registrarMateria() {
  if (localStorage.getItem("Materias")) {
    materias = JSON.parse(localStorage.getItem("Materias"));
  }
  materia = JSON.parse(localStorage.getItem(obtenerNombreMateria()));
  if (!materia) {
  }
  materia.nombre = obtenerNombreMateria();
  materia.nota1.definitiva = calcularDefinitivaNota1();
  materia.nota2.definitiva = calcularDefinitivaNota2();
  materia.nota3.definitiva = calcularDefinitivaNota3();
  localStorage.setItem(materia.nombre, JSON.stringify(materia));
  materia.definitiva = calcularDefinitiva();
  localStorage.setItem(materia.nombre, JSON.stringify(materia));
  materias.push(materia);
  mostrarDefinitiva(materia.definitiva);
  localStorage.setItem("Materias", JSON.stringify(materias));
}

function mostrarDefinitiva(a) {
  var texto = "<p> Su definitiva es de: " + a + "</p>";
  var padre = document.getElementById("definitiva");
  padre.innerHTML = texto;
}
function calcularDefinitiva() {
  materia = JSON.parse(localStorage.getItem(obtenerNombreMateria()));
  var definitivaMateria =
    materia.nota1.definitiva * materia.nota1.porcentajeBase +
    materia.nota2.definitiva * materia.nota2.porcentajeBase +
    materia.nota3.definitiva * materia.nota3.porcentajeBase;
  materia.definitiva = definitivaMateria;
  localStorage.setItem(materia.nombre, JSON.stringify(materia));
  return materia.definitiva;
}
function calcularDefinitivaNota1() {
  var nota1 = JSON.parse(localStorage.getItem("notasPC"));
  var sum = 0;
  nota1.notas.forEach((element) => {
    var valor = element.valor;
    var porcentaje = element.porcentaje;
    sum += valor * (porcentaje / 100);
  });
  return sum;
}
function calcularDefinitivaNota2() {
  var nota2 = JSON.parse(localStorage.getItem("notasSC"));
  var sum = 0;
  nota2.notas.forEach((element) => {
    var valor = element.valor;
    var porcentaje = element.porcentaje;
    sum += valor * (porcentaje / 100);
  });
  return sum;
}
function calcularDefinitivaNota3() {
  var nota3 = JSON.parse(localStorage.getItem("notasTC"));
  var sum = 0;
  nota3.notas.forEach((element) => {
    var valor = element.valor;
    var porcentaje = element.porcentaje;
    sum += valor * (porcentaje / 100);
  });
  return sum;
}
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
