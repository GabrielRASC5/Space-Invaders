let userColor = "yellow";
let enemyColor = "green";
let xspeed = 100;
let playerX = 255;
let playerY = 550;
let user = true;
let enemy = true;
let userShot = true;
let yspeed = 550;

let a = xspeed;

let b = yspeed;

let xdirection = 1;

let ydirection = 1;

function setup(){
  createCanvas(600,600);
  background(0);
}

function enemyMovement(){
  fill(enemyColor);
  a+=xdirection*3;

  ellipse(a,100,100,100);



  if(a>500){

  //change direction

  xdirection = -1

  }

  else if(a<100){

  //change direction

  xdirection = 1

  }
}
function userMovement(){
    if(keyIsDown(LEFT_ARROW)){
        playerX -= 5;
    }
    if(keyIsDown(RIGHT_ARROW)){
        playerX += 5;
    }
 noStroke();
 fill(0,0,255);
 rect(playerX, playerY, 75, 10);
}

function draw(){
    background(0);  
    if (enemy == true){
    enemyMovement();
    }
    if(user == true){
    userMovement();
    }
}

function mouseClicked(){
    if (b<0){
        b = 550;
    }
    
    if(mouseX <= 600 && mouseY <= 600){
        fill("red");
        b+=ydirection*3;
        noStroke();
        ellipse(300,b,25,25);  
        if (b > 550){
            ydirection = -1
        }
    }
}



