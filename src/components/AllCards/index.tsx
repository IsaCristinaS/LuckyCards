import { useEffect, useState } from "react";
import { Carta3D } from "../Carta3D";
import { WrapperCards, NewCardWrapper, WrapperButton } from "./styles";
import { Modal } from "../Modal";
import { NewCardAnimated3D } from "../NewCardAnimated3D";
import { comprasMock } from "../../mock";

// Import or define the Carta type
import type { Carta } from "../../types/types-purchase";
import { CardsRevealFlow } from "../CardRevealFlow";

export function AllCards() {
  const [showRevealFlow, setShowRevealFlow] = useState(false);
  const [cardsToReveal, setCardsToReveal] = useState<Carta[]>([]); // array de cartas a revelar
  // const [revealedCards, setRevealedCards] = useState<Carta[]>([]);

  useEffect(() => {
    const cardsToOpen = comprasMock.flatMap((purchase) =>
      purchase.cartas.filter((carta) => carta.estado === "fechada")
    );

    setCardsToReveal(cardsToOpen);
  }, []);

  return (
    <WrapperCards>
      {!showRevealFlow && (
        <Modal
          closeModal={() => setShowRevealFlow(false)}
          bodyContent={
            <NewCardWrapper>
              <h1> Você possui novas cartas!</h1>
              <NewCardAnimated3D />
              <p> Abra já suas cartas clicando no botão abaixo</p>
            </NewCardWrapper>
          }
          footerContent={
            <WrapperButton>
              <button onClick={() => setShowRevealFlow(false)}>Fechar</button>
              <button onClick={() => setShowRevealFlow(true)}>Vamos lá!</button>
            </WrapperButton>
          }
        />
      )}

      {showRevealFlow && (
        <CardsRevealFlow
          cards={cardsToReveal}
          // onCardRevealed={(card) => setRevealedCards([...revealedCards, card])}
          // onFinish={() => {
          //   setShowRevealFlow(false);
          //   setCardsToReveal([]);
          // }}
        />
      )}

      <Carta3D
        frente="https://cdn.retornar.com.br/retornar-bundle/n/img/card-verso-sample.png"
        verso="https://cdn.retornar.com.br/retornar-bundle/n/img/card-premiado-sample.png"
      />
    </WrapperCards>
  );
}
