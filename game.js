let x = 270;
let y = 370;

let speed = 3;

let asteroidX = 270;
let asteroidY = 370;

function setup() {
  createCanvas(800, 600);
}

function character(x, y, s) {
  background(54, 52, 52, 150);
  scale(s);

  //alien neck
  stroke(135, 180, 54);
  strokeWeight(3);
  fill(170, 208, 24);
  rect(x + 177, y + 85, 5, 20);

  //alien left shoulder
  push();
  stroke(135, 180, 54);
  strokeWeight(7);
  noFill();
  beginShape();
  vertex(x + 147, y + 183);
  bezierVertex(x + 162, y + 296, x + 124, y + 92, x + 167, y + 110);
  endShape();
  pop();

  //alien right shoulder
  push();
  stroke(135, 180, 54);
  strokeWeight(7);
  noFill();
  beginShape();
  vertex(x + 208, y + 225);
  bezierVertex(x + 218, y + 193, x + 222, y + 28, x + 173, y + 158);
  endShape();
  pop();

  //alien body
  stroke(135, 180, 54);
  strokeWeight(3);
  fill(170, 208, 24);
  ellipse(x + 180, y + 145, 40, 90);

  //alien head
  stroke(135, 180, 54);
  strokeWeight(3);
  fill(170, 208, 24);
  ellipse(x + 180, y + 60, 80, 60);

  //alien left ear
  push();
  translate(x + 146, y + 40);
  rotate(2.3);
  rect(0, 0, 5, 20);
  pop();

  push();
  translate(x + 126, y + 27);
  rotate(2.3);
  ellipse(0, 0, 20, 10);
  pop();

  //alien right ear
  push();
  translate(x + 212, y + 41);
  rotate(4.0);
  rect(0, 0, 5, 20);
  pop();

  push();
  translate(x + 227, y + 26);
  rotate(3.9);
  ellipse(0, 0, 20, 10);
  pop();

  //alien left eye
  push();
  noStroke();
  fill(0, 0, 0);
  ellipse(x + 159, y + 60, 25);
  pop();

  push();
  noStroke();
  fill(255, 255, 255);
  ellipse(x + 155, y + 55, 11);

  pop();
  push();
  noStroke();
  fill(255, 255, 255);
  ellipse(x + 166, y + 55, 5);
  pop();

  push();
  noStroke();
  fill(255, 255, 255);
  ellipse(x + 163, y + 63, 7);
  pop();

  //alien right eye
  push();
  noStroke();
  fill(0, 0, 0);
  translate(x + 199, y + 60);
  ellipse(0, 0, 25);
  pop();

  push();
  noStroke();
  fill(255, 255, 255);
  translate(x + 203, y + 55);
  ellipse(0, 0, 11);
  pop();

  push();
  noStroke();
  fill(255, 255, 255);
  translate(x + 193, y + 53);
  ellipse(0, 0, 5);
  pop();

  push();
  noStroke();
  fill(255, 255, 255);
  translate(x + 196, y + 63);
  ellipse(0, 0, 7);
  pop();

  //UFO glass dome
  fill(178, 187, 208, 80);
  stroke(218, 218, 218);
  beginShape();
  vertex(x + 70, y + 180);
  bezierVertex(x, y - 60, x + 320, y - 150, x + 290, y + 180);
  endShape();

  //UFO main shape
  fill(178, 187, 208);
  stroke(218, 218, 218);
  ellipse(x + 180, y + 210, 400, 100);
  fill(93, 104, 149);
  ellipse(x + 180, y + 250, 100, 40);

  //UFO light 1
  fill(180, 11, 27);
  stroke(93, 26, 35);
  ellipse(x + 30, y + 200, 20);

  //UFO light 2
  push();
  fill(158, 177, 33);
  stroke(104, 129, 66);
  translate(x + 90, y + 190);
  ellipse(0, 0, 20);
  pop();

  //UFO light 3
  push();
  fill(180, 11, 27);
  stroke(93, 26, 35);
  translate(x + 150, y + 185);
  ellipse(0, 0, 20);
  pop();

  //UFO light 4
  push();
  fill(158, 177, 33);
  stroke(104, 129, 66);
  translate(x + 210, y + 185);
  ellipse(0, 0, 20);
  pop();

  //UFO light 5
  push();
  fill(180, 11, 27);
  stroke(93, 26, 35);
  translate(x + 270, y + 189);
  ellipse(0, 0, 20);
  pop();

  //UFO light 6
  push();
  fill(158, 177, 33);
  stroke(104, 129, 66);
  translate(x + 330, y + 199);
  ellipse(0, 0, 20);
  pop();
}

function asteroid1(asteroidX, asteroidY) {
  fill(66, 65, 64);
  stroke(82, 81, 80);
  strokeWeight(3);
  ellipse(asteroidX - 100, asteroidY - 200, 90);

  push();
  translate(asteroidX - 140, asteroidY - 202);
  rotate(1.65);
  ellipse(0, 0, 35, 20);
  pop();

  push();
  translate(asteroidX - 70, asteroidY - 225);
  rotate(0.9);
  ellipse(0, 0, 35, 20);
  pop();

  push();
  translate(asteroidX - 100, asteroidY - 175);
  rotate(0.5);
  ellipse(0, 0, 25, 20);
  pop();

  push();
  translate(asteroidX - 110, asteroidY - 235);
  rotate(2.9);
  ellipse(0, 0, 25, 10);
  pop();
}

function asteroid2(asteroidX, asteroidY) {
  fill(66, 65, 64);
  stroke(82, 81, 80);
  strokeWeight(3);
  ellipse(asteroidX - 100, asteroidY - 200, 90);

  push();
  translate(asteroidX - 140, asteroidY - 202);
  rotate(1.65);
  ellipse(0, 0, 35, 20);
  pop();

  push();
  translate(asteroidX - 70, asteroidY - 225);
  rotate(0.9);
  ellipse(0, 0, 35, 20);
  pop();

  push();
  translate(asteroidX - 100, asteroidY - 175);
  rotate(0.5);
  ellipse(0, 0, 25, 20);
  pop();

  push();
  translate(asteroidX - 110, asteroidY - 235);
  rotate(2.9);
  ellipse(0, 0, 25, 10);
  pop();
}

function asteroid3(asteroidX, asteroidY) {
  fill(66, 65, 64);
  stroke(82, 81, 80);
  strokeWeight(3);
  ellipse(asteroidX - 100, asteroidY - 200, 90);

  push();
  translate(asteroidX - 140, asteroidY - 202);
  rotate(1.65);
  ellipse(0, 0, 35, 20);
  pop();

  push();
  translate(asteroidX - 70, asteroidY - 225);
  rotate(0.9);
  ellipse(0, 0, 35, 20);
  pop();

  push();
  translate(asteroidX - 100, asteroidY - 175);
  rotate(0.5);
  ellipse(0, 0, 25, 20);
  pop();

  push();
  translate(asteroidX - 110, asteroidY - 235);
  rotate(2.9);
  ellipse(0, 0, 25, 10);
  pop();
}

function asteroid4(asteroidX, y) {
  fill(66, 65, 64);
  stroke(82, 81, 80);
  strokeWeight(3);
  ellipse(asteroidX - 100, asteroidY - 200, 50);

  push();
  translate(asteroidX - 115, asteroidY - 202);
  rotate(1.65);
  ellipse(0, 0, 15, 10);
  pop();

  push();
  translate(asteroidX - 80, asteroidY - 215);
  rotate(0.7);
  ellipse(0, 0, 15, 10);
  pop();

  push();
  translate(asteroidX - 100, asteroidY - 185);
  rotate(0.1);
  ellipse(0, 0, 15, 10);
  pop();

  push();
  translate(asteroidX - 105, asteroidY - 225);
  rotate(2.9);
  ellipse(0, 0, 15, 5);
  pop();
}

function button(x, y) {
  fill(248, 186, 0);
  rect(x - 70, y + 70, 200, 140);
  textSize(33);
  fill(255, 255, 255);
  text("Play Game", x - 47, y + 145);
}

function draw() {
  asteroid1(asteroidX, asteroidY - 150);
  asteroid2(asteroidX + 250, asteroidY + 150);
  asteroid3(asteroidX - 100, asteroidY + 70);
  asteroid4(asteroidX + 220, asteroidY - 30);
  character(x - 50, y + 50, 0.7);
  //Help from second year NMD student Erik Sandqvist
  y = y + speed;
  if (y > 370 || y < 200) {
    speed = speed * -1;
  }
  button(365, 50);
}

/*
//Garrits code from video with help from Hedda Peterson
function mouseClicked() {
  if (mouseX > 225 && mouseX < 330 && mouseY > 385 && mouseY < 440) {
    console.log("Play Game");
  }
}
*/
//Garrits Code + Help from NMD student Erik Sandqvist
/*let x = 600;
//let y = 100;
let speed = 4;

function draw() {
  character(x, y, 0.6);

  y = y + speed;

  if (y > 600) {
    speed = -4;
  } else if (y === 600) {
    speed = 0;
  }
}
  */
