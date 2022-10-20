import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";

let cursos = [
  new Curso("Agilismo", 60, 93, true, 2022),
  new Curso("Arquitectura", 60, 97, true, 2022),
  new Curso("Ingenieria de SW para la Web", 80, 100, false, 2022),
  new Curso("Pruebas automatizadas", 80, 100, false, 2022),
];

export const ap = new Aprendiz(
  "Juan Camilo",
  "Ramirez Gonzalez",
  "https://i.pinimg.com/736x/9f/85/8e/9f858e7ae6ec0895dab7b6053d05b3ad.jpg",
  22,
  NivelEducativo.UNIVERSITARIO,
  cursos
);

console.log(ap.cursos);

let $aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
let $estadisticasTable: HTMLElement = document.getElementById("estadisticas")!;
let $CursosTable: HTMLElement = document.getElementById("cursos")!;
let $btnFiltro: HTMLElement = document.getElementById("boton-filtro")!;
let $textoBusqueda: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("texto-busqueda")!
);

$btnFiltro.onclick = filtrarPorNombre;

mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursos(ap.cursos);

function filtrarPorNombre(): void {
  let text: string = $textoBusqueda.value;
  text = text ? text : "";
  $CursosTable.getElementsByTagName("tbody")[0].remove();
  let cursos: Curso[] = ap.cursos.filter((c) => c.nombre.match(text));
  mostrarCursos(cursos);
}

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

function mostrarEstadisticas(aprendiz: Aprendiz): void {
  let numeroCertificados = aprendiz.darCursosCertificados();
  let tr: HTMLElement = document.createElement("tr");
  tr.innerHTML = `<td><b>Cursos certificados: </b></td><td>${numeroCertificados}</td>`;
  $estadisticasTable.appendChild(tr);
}

function mostrarCursos(cursos: Curso[]): void {
  let tbody: HTMLElement = document.createElement("tbody");
  for (let curso of cursos) {
    let tr: HTMLElement = document.createElement("tr");
    tr.innerHTML = `
    <td>${curso.nombre}</td>
    <td>${curso.horas}</td>
    <td>${curso.calificacion}</td>
    <td>${curso.certificado}</td>
    <td>${curso.anio}</td>`;
    tbody.appendChild(tr);
  }
  $CursosTable.appendChild(tbody);
}
