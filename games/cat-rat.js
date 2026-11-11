let catX = 100;
let catY = 100;
let catSize= 75;
let catSpeed= 10;

let mouseSize= 40;
let mouseSpeed= 4;

let catched = false;

let d; 

let musX = 0;
let musY = 0;

let gameState = "START";


function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  if(gameState === "START"){          
    text("KATTEN OCH MUSEN", width / 2, height / 2);
    textSize(20);
    textAlign(CENTER);
    text("TRYCK PÅ SPACE FÖR ATT STARTA", width / 2, 500 );
    textSize(50);
     
   } else if(gameState === "PLAY"){
       musX = mouseX;
       musY = mouseY;
  
    catX = constrain( catX, catSize / 2, width- catSize / 2);
    catY = constrain( catY, catSize / 2, height- catSize / 2);
  
    musX = constrain( musX, mouseSize / 2, width- mouseSize / 2);
    musY = constrain( musY, mouseSize / 2, height- mouseSize / 2);
  
  
    
    
  
    if(catched === true){
      fill("orange");
      textSize(30);
      textAlign(CENTER);
      text("KATTEN FÅNGADE MUSEN!", width / 2, height / 2);
    } else{
      
    }
  
    if(keyIsDown("a")){
      catX=catX-catSpeed;
    }
    if(keyIsDown("d")){
      catX=catX+catSpeed;
    }
    if(keyIsDown("w")){
      catY=catY-catSpeed;
    }
    if(keyIsDown("s")){
      catY=catY+catSpeed;
    }
  
    d=dist(catX, catY, musX, musY);
    
    if( d<(catSize / 2 + mouseSize / 2)){
      gameState = "GAMEOVER";
    }
  
  
    fill("yellow");
    circle(musX, musY, mouseSize);
  
    fill("black");
    circle(catX, catY, catSize);
     triangle(catX-catSize/3, catY-catSize/3 , catX, catY-catSize/3, catX-catSize/4, catY-3*catSize/4);
     triangle(catX+catSize/3, catY-catSize/3 , catX, catY-catSize/3, catX+catSize/4, catY-3*catSize/4);
     fill("red");
     triangle(catX-catSize/8, catY, catX-catSize/12, catY-catSize/8, catX-catSize/3, catY-catSize/6);
     triangle(catX+catSize/8, catY, catX+catSize/12 , catY-catSize/8, catX+catSize/3, catY-catSize/6);

    
  } else if(gameState === "GAMEOVER"){
    text("GAMEOVER", width / 2, height / 2);
    
  }
}

function keyPressed(){
  if(keyCode === 32){
    gameState = "PLAY";

    
  }

  
}