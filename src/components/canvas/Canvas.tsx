import React, { FC, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import useDivSize from "../../hooks/useDivSize";

import Brush from "../../tools/Brush";
import Rect from "../../tools/Rect";
import Circle from "../../tools/Circle";

import { setCurTool } from "../../redux/reducers/main";

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

  const toolSelect = useCallback(() => {
    switch (selectedTool) {
      case "brush":
        if (canvasRef.current) {
          const brush = new Brush(canvasRef.current);
          dispatch(setCurTool(brush));
        }
        break;

      case "rect":
        if (canvasRef.current) {
          const rect = new Rect(canvasRef.current);
          dispatch(setCurTool(rect));
        }
        break;

      case "circle":
        if (canvasRef.current) {
          const circle = new Circle(canvasRef.current);
          dispatch(setCurTool(circle));
        }
        break;

      default:
        break;
    }
  }, [selectedTool]);

  useEffect(() => {
    if (canvasRef.current) toolSelect();
  }, [selectedTool]);

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
