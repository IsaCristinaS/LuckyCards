import { useState } from "react";
import { CardContainer, CardFace, CardWrapper } from "./styles";

export function Carta3D({ frente, verso }: { frente: string; verso: string }) {
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
