import { Aprendiz, NivelEducativo } from "./aprendiz.js";

export const ap = new Aprendiz(
  "Juan Camilo",
  "Ramirez Gonzalez",
  "https://i.pinimg.com/736x/9f/85/8e/9f858e7ae6ec0895dab7b6053d05b3ad.jpg",
  22,
  NivelEducativo.UNIVERSITARIO
);

console.log(ap);
