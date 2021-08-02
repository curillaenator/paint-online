import Brush from "./Brush";

class Eraser extends Brush {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
  }

  draw(x: number, y: number) {
    if (this.ctx) {
      this.ctx.strokeStyle = "white";
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    }
  }
}

export default Eraser;
