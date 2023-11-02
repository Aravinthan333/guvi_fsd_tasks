pi = 3.14159;
class Circle {
  constructor(radius, color) {
    (this.radius = radius), (this.color = color);
  }
  gerArea() {
    console.log(pi * this.radius ** 2);
  }
  getCircumference() {
    console.log(2 * pi * this.radius);
  }
  setColor(color) {
    console.log(color);
  }
}
const circle = new Circle(10, "red");
circle.gerArea();
circle.getCircumference();
