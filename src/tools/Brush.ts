import Tool from "./Tool";

class Brush extends Tool {
  mouseDown: boolean;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.mouseDown = false;
    this.listen();
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  mouseUpHandler(e: MouseEvent) {
    this.mouseDown = false;
  }

  mouseDownHandler(e: MouseEvent) {
    this.mouseDown = true;
    this.ctx?.beginPath();

    if (e.target) {
      //@ts-ignore
      const x = e.pageX - e.target.offsetLeft;
      //@ts-ignore
      const y = e.pageY - e.target.offsetTop;

      this.ctx?.moveTo(x, y);
    }
  }

  mouseMoveHandler(e: MouseEvent) {
    if (this.mouseDown) {
      //@ts-ignore
      const x = e.pageX - e.target.offsetLeft;
      //@ts-ignore
      const y = e.pageY - e.target.offsetTop;

      this.draw(x, y);
    }
  }

  draw(x: number, y: number) {
    this.ctx?.lineTo(x, y);
    this.ctx?.stroke();
  }
}

export default Brush;
