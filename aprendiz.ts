export enum NivelEducativo {
  BACHILLERATO = "Bachillerato",
  UNIVERSITARIO = "Universitario",
  POSGRADO = "Posgrado",
}
export class Aprendiz {
  constructor(
    public nombres: string,
    public apellidos: string,
    public avatars: string,
    public edad: number,
    public nivelEducativo: NivelEducativo
  ) {}
}
