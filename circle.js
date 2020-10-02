// function Circle(radius, color) {
//   // Base
//   var ball = this;

//   // Specifications
//   ball.r = radius || 10;         // ball radius
//   ball.c = color || 'red';       // ball color
//   ball.x = 0;                    // center x
//   ball.y = 0;                    // center y
//   ball.m = 0;                    // mass
//   ball.context = null            // the drawing context of ball
// }

class Circle{
  constructor(color, x, y, radius) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw() {
    context.beginPath();
    context.arc(circle.initx, circle.inity, circle.radius, 0, 2 * Math.PI, true);
    context.fillStyle = circle.color;
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#000000';
    context.stroke();
  }
}
