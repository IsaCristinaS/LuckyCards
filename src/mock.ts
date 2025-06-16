import type { CompraComCartas } from "./types/types-purchase";

export const comprasMock: CompraComCartas[] = [
  {
    idCompra: "CMP-20240601-001",
    nome: "João Silva",
    email: "joao@email.com",
    produto: "Kit Despertar",
    dataCompra: "2024-06-01T10:45:00.000Z",
    cartas: [
      {
        id: "carta-001",
        estado: "aberta",
        dataExpiracao: "2024-06-20T00:00:00.000Z",
      },
      {
        id: "carta-002",
        estado: "aberta",
        dataExpiracao: "2024-06-25T00:00:00.000Z",
      },
    ],
  },
  {
    idCompra: "CMP-20240528-002",
    nome: "Maria Oliveira",
    email: "maria@email.com",
    produto: "Combo Transformar + Ebook",
    dataCompra: "2024-05-28T14:12:00.000Z",
    cartas: [
      {
        id: "carta-003",
        estado: "expirada",
        dataExpiracao: "2024-06-01T00:00:00.000Z",
      },
      {
        id: "carta-004",
        estado: "aberta",
        dataExpiracao: "2024-06-30T00:00:00.000Z",
      },
    ],
  },
  {
    idCompra: "CMP-20240612-003",
    nome: "Aline Santos",
    email: "aline@email.com",
    produto: "Kit Jornada",
    dataCompra: "2024-06-12T18:45:00.000Z",
    cartas: [
      {
        id: "carta-005",
        estado: "fechada",
        dataExpiracao: "2024-06-18T00:00:00.000Z",
      },
      {
        id: "carta-006",
        estado: "fechada",
        dataExpiracao: "2024-06-10T00:00:00.000Z",
      },
      {
        id: "carta-007",
        estado: "fechada",
        dataExpiracao: "2024-07-01T00:00:00.000Z",
      },
    ],
  },
];
