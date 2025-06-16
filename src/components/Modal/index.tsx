import React from "react";
import { Wrapper } from "./styles";

interface Props {
  closeModal?: () => void;
  title?: string;
  titleColor?: string;
  bodyContent: React.ReactElement;
  headerContent?: React.ReactElement;
  footerContent?: React.ReactElement;
  colorClose?: string;
  style?: object;
  maxWidth?: string;
  width?: string;
  padding?: string;
  backgroundColor?: string;
  bgOpacity?: number;
}

export function Modal(props: Props) {
  const handleCloseModal = () => {
    if (!props.closeModal) {
      return;
    }
    props.closeModal();
  };

  return (
    <Wrapper onClick={handleCloseModal} style={props.style} {...props}>
      <div
        id="modal-content"
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          {props.closeModal ? (
            <span className="close" onClick={handleCloseModal} role="button">
              &times;
            </span>
          ) : null}
          {props.title ? <h1 className="title">{props.title}</h1> : null}
          {props.headerContent ? (
            <div className="head-content">{props.headerContent}</div>
          ) : null}
        </div>
        <div className="modal-body">{props.bodyContent}</div>
        {props.footerContent && (
          <div className="modal-footer">{props.footerContent}</div>
        )}
      </div>
    </Wrapper>
  );
}
