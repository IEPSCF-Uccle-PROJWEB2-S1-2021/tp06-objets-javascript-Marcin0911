class Shape{
  constructor(name, sides, sideLength){
    this.name = name;
    this.sides = sides
    this.sideLength = sideLength;
  }

  calcPerimeter(){
    console.log(this.sides*this.sideLength);
  }
}

class Square extends Shape{
  constructor(sideLength){
    super(sideLength);
    this.name = "square";
    this.sides = 4;
    this.sideLength = sideLength;
  }

  calcArea(){
    console.log(Math.pow(this.sideLength, 2));
  }
}

let square = new Square(5);
square.calcPerimeter();
square.calcArea();
