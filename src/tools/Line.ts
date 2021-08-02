import Tool from "./Tool";

class Line extends Tool {
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

      this.draw(this.startX, this.startY, curX, curY);
    }
  }

  draw(sX: number, sY: number, eX: number, eY: number) {
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.beginPath();
      this.ctx?.moveTo(sX, sY);
      this.ctx?.lineTo(eX, eY);
      this.ctx?.stroke();
    };
  }
}

export default Line;
