import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";
var cursos = [
    new Curso("Agilismo", 60, 93, true, 2022),
    new Curso("Arquitectura", 60, 97, true, 2022),
    new Curso("Ingnieria de SW para la Web", 80, 100, false, 2022),
    new Curso("Pruebas automatizadas", 80, 100, false, 2022),
];
export var ap = new Aprendiz("Juan Camilo", "Ramirez Gonzalez", "https://i.pinimg.com/736x/9f/85/8e/9f858e7ae6ec0895dab7b6053d05b3ad.jpg", 22, NivelEducativo.UNIVERSITARIO, cursos);
console.log(ap.cursos);
var $aprendizTable = document.getElementById("aprendiz");
var $estadisticasTable = document.getElementById("estadisticas");
var $CursosTable = document.getElementById("cursos");
var $btnFiltro = document.getElementById("boton-filtro");
var $textoBusqueda = (document.getElementById("texto-busqueda"));
$btnFiltro.onclick = filtrarPorNombre;
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursos(ap.cursos);
function filtrarPorNombre() {
    var text = $textoBusqueda.value;
    text = text ? text : "";
    $CursosTable.getElementsByTagName("tbody")[0].remove();
    var cursos = ap.cursos.filter(function (c) { return c.nombre.match(text); });
    mostrarCursos(cursos);
}
function mostrarDatosAprendiz(aprendiz) {
    var tbody = document.createElement("tbody");
    tbody.innerHTML = "\n  <tr><td colspan=2><img src=".concat(aprendiz.avatars, " height=\"100\"></td></tr>\n  <tr><td>Nombres:</td><td>").concat(aprendiz.nombres, "</td></tr>\n  <tr><td>Apellidos:</td><td>").concat(aprendiz.apellidos, "</td></tr>\n  <tr><td>Nivel Educactivo:</td><td>").concat(aprendiz.nivelEducativo, "</td></tr>\n  <tr><td>Edad:</td><td>").concat(aprendiz.edad, "</td></tr>");
    $aprendizTable.appendChild(tbody);
}
function mostrarEstadisticas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    var tr = document.createElement("tr");
    tr.innerHTML = "<td><b>Cursos certificados: </b></td><td>".concat(numeroCertificados, "</td>");
    $estadisticasTable.appendChild(tr);
}
function mostrarCursos(cursos) {
    var tbody = document.createElement("tbody");
    for (var _i = 0, cursos_1 = cursos; _i < cursos_1.length; _i++) {
        var curso = cursos_1[_i];
        var tr = document.createElement("tr");
        tr.innerHTML = "\n    <td>".concat(curso.nombre, "</td>\n    <td>").concat(curso.horas, "</td>\n    <td>").concat(curso.calificacion, "</td>\n    <td>").concat(curso.certificado, "</td>\n    <td>").concat(curso.anio, "</td>");
        tbody.appendChild(tr);
    }
    $CursosTable.appendChild(tbody);
}
