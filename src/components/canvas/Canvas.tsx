import React, { FC } from "react";
import styled from "styled-components";

const CanvasStyled = styled.div`
  width: 100%;
  height: calc(100% - 12rem);
  min-height: 25rem;
`;

const Canvas: FC = () => {
  return (
    <CanvasStyled>
      <canvas></canvas>
    </CanvasStyled>
  );
};

export default Canvas;
