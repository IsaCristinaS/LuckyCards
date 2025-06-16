import type { Carta } from "../../types/types-purchase";
import { CardsAmount } from "../CardsAmount";
import { Wrapper } from "./styles";

// export function CardsRevealFlow() {
//   console.log(cards);
export function CardsRevealFlow({ cards }: { cards: Carta[] }) {
  return (
    <Wrapper>
      <CardsAmount
        cards={cards}
        frente="https://cdn.retornar.com.br/retornar-bundle/n/img/card-verso-sample.png"
        verso="https://cdn.retornar.com.br/retornar-bundle/n/img/card-premiado-sample.png"
      />
    </Wrapper>
  );
}
