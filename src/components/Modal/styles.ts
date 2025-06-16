import styled from "styled-components";

type Props = {
  width?: string;
  maxWidth?: string;
  padding?: string;
  titleColor?: string;
  backgroundColor?: string;
  bgOpacity?: number;
};

export const Wrapper = styled.div<Props>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #000;
  background-color: ${({ bgOpacity }) => `rgba(0, 0, 0, ${bgOpacity ?? 0.4})`};

  .modal-content {
    position: relative;
    margin: auto 16px;
    padding: ${({ padding }) => padding || "16px"};
    background-color: ${({ backgroundColor }) => backgroundColor || "#f1f1f1"};
    border-radius: 5px;
    width: ${({ width }) => width || "100%"};
    max-width: ${({ maxWidth }) => maxWidth || "400px"};

    @media (max-width: 991px) {
      width: 500px;
    }
  }

  .modal-content.no-padding {
    padding: 0px;
  }

  .close {
    position: absolute;
    color: #d3d3d3;
    font-size: 24px;
    font-weight: bold;
    top: 12px;
    right: 17px;
    line-height: 16px;
    z-index: 999;
  }

  .close:hover,
  .close:focus {
    color: #26335e;
    text-decoration: none;
    cursor: pointer;
  }

  .modal-head {
    display: flex;
    justify-content: center;

    .title {
      font-size: 20px;
      font-weight: 800;
      line-height: 0.9;
      letter-spacing: 1px;
      color: ${({ titleColor }) => titleColor || "#555"};
    }
  }
  .modal-body {
    padding: 0;
  }

  .modal-footer {
    display: flex;
    border: 0;
    padding: 0;
    justify-content: space-around;
  }
`;
