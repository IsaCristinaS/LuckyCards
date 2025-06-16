import { CardFace, CardWrapper, Wrapper } from "./styles";

export function NewCardAnimated3D() {
  return (
    <Wrapper>
      <CardWrapper>
        <CardFace>
          <img
            src={
              "https://cdn.retornar.com.br/retornar-bundle/n/img/card-verso-sample.png"
            }
            alt="Frente da carta"
            style={{ width: "100%", height: "100%" }}
          />
        </CardFace>
        <CardFace back>
          <img
            src={
              "https://cdn.retornar.com.br/retornar-bundle/n/img/card-premiado-sample.png"
            }
            alt="Verso da carta"
            style={{ width: "100%", height: "100%" }}
          />
        </CardFace>
      </CardWrapper>
    </Wrapper>
  );
}
