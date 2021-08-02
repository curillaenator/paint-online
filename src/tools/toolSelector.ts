import Brush from "./Brush";
import Rect from "./Rect";
import Circle from "./Circle";

type TToolSelector = (
  selectedTool: string,
  fillColor: string,
  strokeColor: string,
  lineWidth: number,
  canvas: HTMLCanvasElement
) => void;

const toolSelector: TToolSelector = (
  selectedTool,
  fillColor,
  strokeColor,
  lineWidth,
  canvas
) => {
  switch (selectedTool) {
    case "brush":
      if (canvas) {
        const brush = new Brush(canvas);
        brush.fillColor = fillColor;
        brush.strokelColor = strokeColor;
        brush.lineWidth = lineWidth;
      }
      break;

    case "rect":
      if (canvas) new Rect(canvas);
      break;

    case "circle":
      if (canvas) new Circle(canvas);
      break;

    default:
      break;
  }
};
