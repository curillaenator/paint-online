import React, { FC, useRef, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import useDivSize from "../../hooks/useDivSize";

import { setCanvas, setUndoList } from "../../redux/reducers/main";

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
  const { tool, undoList } = useAppSelector((state) => state.main);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [width, height, ref] = useDivSize();

  useLayoutEffect(() => {
    if (canvasRef.current) dispatch(setCanvas(canvasRef.current));
  }, [dispatch]);

  useEffect(() => {
    if (canvasRef.current) selector(tool, canvasRef.current, dispatch);
  }, [tool, dispatch]);

  const canvasSnap = () => {
    if (canvasRef.current) {
      const undoListUpd = [...undoList, canvasRef.current.toDataURL()];
      dispatch(setUndoList(undoListUpd));
    }
  };

  return (
    <CanvasStyled ref={ref}>
      <canvas
        className="canvas"
        width={width}
        height={height}
        ref={canvasRef}
        onMouseDown={canvasSnap}
      ></canvas>
    </CanvasStyled>
  );
};

export default Canvas;
