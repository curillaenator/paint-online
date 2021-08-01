import React, { FC, useRef, useLayoutEffect, useState } from "react";
import styled from "styled-components";

import { colors } from "../../colors/colors";

const CanvasStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - 12rem);
  min-height: 25rem;

  .canvas {
    background-color: ${colors.white};
  }
`;

const Canvas: FC = () => {
  const canvasRef = useRef(null);

  console.log(canvasRef.current);

  return (
    <CanvasStyled ref={canvasRef}>
      <canvas className="canvas" width={600} height={400}></canvas>
    </CanvasStyled>
  );
};

export default Canvas;
