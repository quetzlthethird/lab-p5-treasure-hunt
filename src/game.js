// class Game { // first try
//   // constructor() {
//   //   this.x = 0;
//   //   this.y = 0;
//   // }

//   drawGrid() {
//     // background(220);
//     //For (var BEGIN; END; INTERVAL){DO SOMETHING }
//     for (var x = 0; x < width; x += width / 10) {
//       for (var y = 0; y < height; y += height / 10) {
//         stroke(0);
//         strokeWeight(2);
//           // line(x1, y1, x2, y2)
//         line(x, 0, x, height);
//         line(0, y, width, y);
//       }
//     }
//   }
// }

class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (let x = 0; x <= width; x += 100) {
      for (let y = 0; y <= height; y += 100) {
        line(x, 0, x, 1000);
        line(0, y, 1000, y);
      }
    }
  }
}

class Player {
  constructor(col, row, img) {
    this.col = col;
    this.row = row;
    this.image = img ;
  }
  moveUp() {
    if (this.row > 0) {
    this.row -= 100
  }
  }
  moveDown() {
    if (this.row < 900){
    this.row += 100}
  }
  moveLeft() {
    if (this.col >0){
    this.col -= 100}
  }
  moveRight() {
    if (this.col < 900){
    this.col += 100
  }
  }
  preload(){
    this.image = loadImage('/assets/character-down.png');
  }
  draw(){
    image(this.image, this.col, this.row, 100,100);
  }
}

class Treasure {
  constructor (col,row,img){
    this.col = Math.floor(Math.random()*10)*100;
    this.row = Math.floor(Math.random()*10)*100;
    this.image = img ;
  }

  // setRandomPosition(){
  //   this.col = Math.random(col);
  //   this.row = Math.random(row);
  // };

  preload(){
    this.image = loadImage('assets/treasure.png');
  }
  draw(){
    image(this.image, this.col, this.row, 100,100);
  }
}