import { colors } from "../colors/colors";

class Tool {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D | null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.fillColor = colors.dark;
    this.strokelColor = colors.dark;
    this.lineWidth = 1;
    this.unlisten();
  }

  set fillColor(color: string) {
    this.ctx!.fillStyle = color;
  }

  set strokelColor(color: string) {
    this.ctx!.strokeStyle = color;
  }

  set lineWidth(width: number) {
    this.ctx!.lineWidth = width;
  }

  unlisten() {
    this.canvas.onmousemove = null;
    this.canvas.onmousedown = null;
    this.canvas.onmouseup = null;
  }
}

export default Tool;
