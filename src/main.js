const game = new Game();
const player = new Player(0, 0);
const treasure = new Treasure();

function preload(){
  player.preload();
  treasure.preload();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  player.draw(); 
  treasure.draw();
}

function keyPressed(){ //tied to square
  if (keyCode === 40) { //down a row
    player.moveDown()
  } 
  if (keyCode === 38) {
    player.moveUp()
  }
  if (keyCode === 39) {
    player.moveRight()
  }
  if (keyCode === 37) {
    player.moveLeft()
  }
}


  
