//All Variables defined
let x = 420;
let y = 370;
let velocity = 3;

let asteroidX = 370;
let asteroidY = 270;

let groundX = 100;
let groundY = 100;

let state = "start";
let acceleration = 0.5;

function setup() {
  createCanvas(600, 800);
  background(57, 63, 67);
}

// Functions for the objects in the game
function character(x, y, s) {
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

// Start Help from Second Year NMD student
function asteroid(asteroidX, asteroidY, asteroidScale) {
  push();

  //Big circle and Scaling defined
  scale(asteroidScale);
  fill(66, 65, 64);
  stroke(147, 9, 253);
  strokeWeight(3);
  ellipse(asteroidX - 100, asteroidY - 200, 90);

  //Crater
  push();
  translate(asteroidX - 140, asteroidY - 202);
  rotate(1.65);
  ellipse(0, 0, 35, 20);
  pop();

  //Crater
  push();
  translate(asteroidX - 70, asteroidY - 225);
  rotate(0.9);
  ellipse(0, 0, 35, 20);
  pop();

  //Crater
  push();
  translate(asteroidX - 100, asteroidY - 175);
  rotate(0.5);
  ellipse(0, 0, 25, 20);
  pop();

  //Crater
  push();
  translate(asteroidX - 110, asteroidY - 235);
  rotate(2.9);
  ellipse(0, 0, 25, 10);
  pop();
  pop();
  //End Help
}

function instructions() {
  // Button
  fill(31, 31, 31);
  stroke(129, 129, 129);
  strokeWeight(6);
  rect(50, 1100, 300, 70, 5);

  // Text
  fill(210, 213, 211);
  noStroke();
  textSize(25);
  text("Play using the Space Bar", 60, 1145);
}
function asteroids(asteroidX, asteroidY) {
  // Asteroid constellation
  //Idea from/Help with structure of asteroids from second year NMD Student
  asteroid(270, 220);
  asteroid(720, 710, 0.7);
  asteroid(170, 440, 0.7);
  asteroid(590, 340);
  asteroid(280, 620);
  asteroid(420, 850);
}

function playButton(x, y) {
  //main text
  fill(200, 200, 255);
  rect(x - 120, y, 350, 180);
  textSize(43);
  noStroke();
  fill(0);
  text("Play Game", x - 47, y + 75);

  //Text explaining game
  textSize(25);
  fill(0);
  text("Help the Alien to land safley", x - 97, y + 125);
}

function gameScreenBackground() {
  background(57, 63, 67);
  asteroids();
}

function landingGround() {
  //Ground
  push();
  fill(41, 40, 40);
  noStroke();
  rect(0, 650, 600, 150);
  pop();

  //Helipad
  push();
  noStroke();
  fill(255, 255, 255);
  ellipse(300, 710, 340, 100);
  pop();

  push();
  noStroke();
  fill(42, 46, 80);
  ellipse(300, 710, 320, 90);
  pop();

  push();
  noStroke();
  fill(255, 255, 255);
  ellipse(300, 710, 300, 73);
  pop();

  //"H" on Helipad
  push();
  noStroke();
  fill(42, 46, 80);
  rect(250, 680, 10, 60);
  rect(350, 680, 10, 60);
  rect(260, 710, 90, 10);
  pop();
}

// Functions for different screens of the game
function startScreen() {
  clear();
  gameScreenBackground();
  character(x - 180, y + 150, 0.7);

  //Start Help from second year NMD student Erik Sandquist (
  y = y + velocity;
  if (y > 370 || y < 200) {
    velocity = velocity * -1;
  }
  //End Help
  playButton(345, 50);
}

function gameScreen() {
  gameScreenBackground();
  landingGround();
  character(x, y, 0.5);
  instructions();

  //start Help - during lab from master students
  y = y + velocity;
  velocity = velocity + acceleration;

  if (keyIsDown(32)) {
    acceleration = -0.5;
  } else {
    acceleration = 0.5;
  }
  if (velocity > 4 && y >= 1150) {
    state = "gameOver";
  }
  if (velocity < 4 && y >= 1150) {
    state = "youWin";
  }
} //End Help

function gameOverScreen() {
  background(179, 36, 40);
  strokeWeight(5);
  stroke(66, 65, 64);
  fill(147, 9, 253);
  rect(groundX + 60, groundY + 200, 250, 150);
  fill(255, 255, 255);
  textSize(25);
  text("Game Over", groundX + 120, groundY + 280);
  textSize(17);
  text("Click to restart", groundX + 130, groundY + 320);
}

function youWinScreen() {
  //Button
  background(147, 9, 253);
  strokeWeight(5);
  stroke(66, 65, 64);
  fill(179, 36, 40);
  rect(groundX + 60, groundY + 200, 250, 150);

  //Text
  fill(255, 255, 255);
  textSize(25);
  noStroke();
  text("You Win", groundX + 135, groundY + 260);
  textSize(17);
  text("Click to return to home page", groundX + 80, groundY + 310);
}

//Main game functions
function draw() {
  clear();
  if (state === "start") {
    startScreen();
  } else if (state === "playGame") {
    gameScreen();
  } else if (state === "gameOver") {
    gameOverScreen();
  } else if (state === "youWin") {
    youWinScreen();
  }
}

function mouseClicked() {
  if (state === "start") {
    if (mouseX > 160 && mouseX < 405 && mouseY > 35 && mouseY < 160) {
      state = "playGame";
    }
  } else if (state === "gameOver") {
    if (mouseX > 160 && mouseX < 410 && mouseY > 301 && mouseY < 450) {
      state = "playGame";
      y = 370;
      velocity = 3;
      acceleration = 0.5;
    }
  } else if (state === "youWin") {
    if (mouseX > 160 && mouseX < 410 && mouseY > 300 && mouseY < 450) {
      state = "start";
      y = 370;
      velocity = 3;
    }
  }
}
