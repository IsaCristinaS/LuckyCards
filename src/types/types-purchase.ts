export type Carta = {
  id: string;
  estado: "fechada" | "aberta" | "expirada";
  dataExpiracao: string; // ISO
};

export type CompraComCartas = {
  idCompra: string;
  nome: string;
  email: string;
  produto: string;
  dataCompra: string; // ISO
  cartas: Carta[];
};
