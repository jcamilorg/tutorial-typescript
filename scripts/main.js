import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";
var cursos = [
    new Curso("Agilismo", 60, 93, true, 2021),
    new Curso("Arquitectura", 60, 97, true, 2021),
    new Curso("Ingnieria de SW para la Web", 80, 100, false, 2022),
    new Curso("Pruebas automatizadas", 80, 100, false, 2022),
];
export var ap = new Aprendiz("Juan Camilo", "Ramirez Gonzalez", "https://i.pinimg.com/736x/9f/85/8e/9f858e7ae6ec0895dab7b6053d05b3ad.jpg", 22, NivelEducativo.UNIVERSITARIO, cursos);
console.log(ap.cursos);
var $aprendizTable = document.getElementById("aprendiz");
var $estadisticasTable = document.getElementById("estadisticas");
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
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
