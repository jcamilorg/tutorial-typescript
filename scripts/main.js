import { Aprendiz, NivelEducativo } from "./aprendiz.js";
export var ap = new Aprendiz("Juan Camilo", "Ramirez Gonzalez", "https://i.pinimg.com/736x/9f/85/8e/9f858e7ae6ec0895dab7b6053d05b3ad.jpg", 22, NivelEducativo.UNIVERSITARIO);
var $aprendizTable = document.getElementById("aprendiz");
mostrarDatosAprendiz(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbody = document.createElement("tbody");
    tbody.innerHTML = "\n  <tr><td colspan=2><img src=".concat(aprendiz.avatars, " height=\"100\"></td></tr>\n  <tr><td>Nombres:</td><td>").concat(aprendiz.nombres, "</td></tr>\n  <tr><td>Apellidos:</td><td>").concat(aprendiz.apellidos, "</td></tr>\n  <tr><td>Nivel Educactivo:</td><td>").concat(aprendiz.nivelEducativo, "</td></tr>\n  <tr><td>Edad:</td><td>").concat(aprendiz.edad, "</td></tr>");
    $aprendizTable.appendChild(tbody);
}
