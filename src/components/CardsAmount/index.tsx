import { useState } from "react";
import { CardContainer, CardFace, CardWrapper } from "./styles";
import type { Carta } from "../../types/types-purchase";

// Make sure to import or define Carta type above if not already
// import { Carta } from 'path-to-carta-type';

interface CardsAmountProps {
  cards: Carta[];
  frente: string;
  verso: string;
}

export function CardsAmount({ cards, frente, verso }: CardsAmountProps) {
  const [availableCards, setAvailableCards] = useState<Carta[]>(cards);
  const [revealedCards, setRevealedCards] = useState<Carta[]>([]);
  const [flipped, setFlipped] = useState(false);

  return (
    <CardContainer>
      <CardWrapper flipped={flipped} onClick={() => setFlipped(!flipped)}>
        <CardFace>
          <img
            src={frente}
            alt="Frente da carta"
            style={{ width: "100%", height: "100%" }}
          />
        </CardFace>
        <CardFace back>
          <img
            src={verso}
            alt="Verso da carta"
            style={{ width: "100%", height: "100%" }}
          />
        </CardFace>
      </CardWrapper>
    </CardContainer>
  );
}
