import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% {
    transform: translateY(0px) rotateZ(0deg) rotateY(0deg);
  }
  10% {
    transform: translateY(0px) rotateZ(0deg) rotateY(360deg) ;
  }
  25% {
    transform: translateY(0px) rotateZ(0deg) rotateY(0deg); /* Metade do flip */
  }
  45% {
    transform: translateY(2px) rotateZ(-2deg) rotateY(-10deg) ;
  }
  60% {
    transform: translateY(-1px) rotateZ(0deg) rotateY(15deg); /* Termina o flip completo */
  }
  80% {
    transform: translateY(-5px) rotateZ(0deg) rotateY(8deg);
  }
  100% {
    transform: translateY(-2px) rotateZ(0deg) rotateY(0deg);
  }
`;

const neonPulse = keyframes`
  0% {
    box-shadow: 
      0 0 12px rgba(255, 235, 100, 0.4),
      0 0 24px rgba(255, 235, 100, 0.3),
      0 0 48px rgba(255, 235, 100, 0.2),
      0 0 72px rgba(255, 235, 100, 0.15);
  }
  50% {
    box-shadow: 
      0 0 20px rgba(255, 235, 100, 0.6),
      0 0 40px rgba(255, 235, 100, 0.4),
      0 0 80px rgba(255, 235, 100, 0.3),
      0 0 120px rgba(255, 235, 100, 0.2);
  }
  100% {
    box-shadow: 
      0 0 12px rgba(255, 235, 100, 0.4),
      0 0 24px rgba(255, 235, 100, 0.3),
      0 0 48px rgba(255, 235, 100, 0.2),
      0 0 72px rgba(255, 235, 100, 0.15);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  transform-style: preserve-3d;
`;

export const CardWrapper = styled.div`
  width: 200px;
  height: 280px;
  position: relative;
  transform-style: preserve-3d;
  animation:
    ${float} 6s ease-in-out infinite,
    ${neonPulse} 3s ease-in-out infinite;

  border-radius: 12px; /* ajuda a suavizar o brilho nas bordas */
`;

export const CardFace = styled.div<{ back?: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  /* border-radius: 0px; */
  overflow: hidden;

  ${({ back }) =>
    back &&
    `
    transform: rotateY(180deg);
  `}
`;
