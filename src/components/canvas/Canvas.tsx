import React, { FC, useRef, useEffect } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import useDivSize from "../../hooks/useDivSize";

import selector from "../../tools/Selector";

import { colors } from "../../colors/colors";

const CanvasStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - 12rem);
  min-height: 25rem;
  padding: 0 2rem;

  .canvas {
    background-color: ${colors.white};
  }
`;

const Canvas: FC = () => {
  const dispatch = useAppDispatch();
  const selectedTool = useAppSelector((state) => state.main.tool);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [width, height, ref] = useDivSize();

  useEffect(() => {
    if (canvasRef.current) selector(selectedTool, canvasRef.current, dispatch);
  }, [selectedTool, dispatch]);

  return (
    <CanvasStyled ref={ref}>
      <canvas
        className="canvas"
        width={width}
        height={height}
        ref={canvasRef}
      ></canvas>
    </CanvasStyled>
  );
};

export default Canvas;
