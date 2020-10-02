class Text{
  constructor(body, x , y) {
    this.body = body;
    this.x = x;
    this.y = y;
  }

  drawIn(context) {
    context.fillText(this.body, this.x, this.y);
  }
}
