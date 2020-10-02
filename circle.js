class Circle{
  constructor(circle) {
    this.radius = circle.radius;
    this.x = circle.x;
    this.y = circle.y;
    this.color = circle.color;
    this.draggable = circle.draggable;
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    context.fillStyle = this.color;
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#000000';
    context.stroke();
  }
}
