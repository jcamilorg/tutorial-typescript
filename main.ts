import { Aprendiz, NivelEducativo } from "./aprendiz.js";

export const ap = new Aprendiz(
  "Juan Camilo",
  "Ramirez Gonzalez",
  "https://i.pinimg.com/736x/9f/85/8e/9f858e7ae6ec0895dab7b6053d05b3ad.jpg",
  22,
  NivelEducativo.UNIVERSITARIO
);

let $aprendizTable: HTMLElement = document.getElementById("aprendiz")!;

mostrarDatosAprendiz(ap);

function mostrarDatosAprendiz(aprendiz: Aprendiz): void {
  let tbody = document.createElement("tbody");
  tbody.innerHTML = `
  <tr><td colspan=2><img src=${aprendiz.avatars} height="100"></td></tr>
  <tr><td>Nombres:</td><td>${aprendiz.nombres}</td></tr>
  <tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>
  <tr><td>Nivel Educactivo:</td><td>${aprendiz.nivelEducativo}</td></tr>
  <tr><td>Edad:</td><td>${aprendiz.edad}</td></tr>`;
  $aprendizTable.appendChild(tbody);
}
