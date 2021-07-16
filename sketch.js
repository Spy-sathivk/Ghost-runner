var towerIMG, ghostIMG;
var ghost;





function preload() {
  ghostIMG = loadAnimation("ghost-jumping.png", "ghost-standing.png" );
  towerIMG = loadImage('tower.png');

}
function setup() {
  createCanvas(450,450);
  ghost = createSprite(225,225,20,20);
  ghost.addAnimation('label',ghostIMG);
  ghost.scale = 0.5;
  
}


function draw() {
  background ('white');
  drawSprites();
}