import styled from "styled-components";

export const CardContainer = styled.div`
  perspective: 1000px;
  width: 200px;
  height: 280px;
  transform-style: preserve-3d;
`;

export const CardWrapper = styled.div<{ flipped: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
  transform: ${({ flipped }) =>
    flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
  cursor: pointer;
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
