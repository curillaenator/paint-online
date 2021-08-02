import Tool from "./Tool";

class Circle extends Tool {
  mouseDown: boolean;
  startX: number;
  startY: number;
  saved: string;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.mouseDown = false;
    this.startX = 0;
    this.startY = 0;
    this.saved = "";
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
      this.startX = e.pageX - e.target.offsetLeft;
      //@ts-ignore
      this.startY = e.pageY - e.target.offsetTop;
      this.saved = this.canvas.toDataURL();
    }
  }

  mouseMoveHandler(e: MouseEvent) {
    if (this.mouseDown) {
      //@ts-ignore
      const curX = e.pageX - e.target.offsetLeft;
      //@ts-ignore
      const curY = e.pageY - e.target.offsetTop;

      const rX = Math.abs(curX - this.startX);
      const rY = Math.abs(curY - this.startY);

      this.draw(this.startX, this.startY, rX, rY);
    }
  }

  draw(x: number, y: number, rX: number, rY: number) {
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.beginPath();
      this.ctx?.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
      this.ctx?.fill();
      this.ctx?.stroke();
    };
  }
}

export default Circle;
