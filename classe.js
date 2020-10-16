class Shape{
  constructor(name, sides, sideLength){
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter(){
    console.log(this.sides*this.sideLength);
  }
}



