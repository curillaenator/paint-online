import Brush from "./Brush";
import Rect from "./Rect";
import Circle from "./Circle";
import Line from "./Line";
import Eraser from "./Eraser";

import { setCurTool } from "../redux/reducers/main";
import { TDispatch } from "../redux/store";

type TSelector = (
  tool: string,
  canvas: HTMLCanvasElement,
  dispatch: TDispatch
) => void;

const selector: TSelector = (tool, canvas, dispatch) => {
  switch (tool) {
    case "brush":
      dispatch(setCurTool(new Brush(canvas)));
      break;

    case "rect":
      dispatch(setCurTool(new Rect(canvas)));
      break;

    case "circle":
      dispatch(setCurTool(new Circle(canvas)));
      break;

    case "line":
      dispatch(setCurTool(new Line(canvas)));
      break;

    case "eraser":
      dispatch(setCurTool(new Eraser(canvas)));
      break;

    default:
      break;
  }
};

export default selector;
