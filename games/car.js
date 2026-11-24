let roadWidth= 400;

let playerXpos= 50;
let playerYpos;
let playerWidth= 70;
let playerHeight= 100;

let playerTurnSpeed= 0.5;

//let enemy ={
 //   x:50,
 //   y:0
//}



let enemyXpos= 50;
let enemyYpos;
let enemyWidth= 70;
let enemyHeight= 100;

let enemyTurnSpeed= 20;

let enemy2Xpos= 500;
let enemy2Ypos;
let enemy2Width= 70;
let enemy2Height= 100;

let enemy2TurnSpeed= 1;

let point= 0;
let pointSpeed = 0.1;

let d;

let crashed= false;

let gameState="START"







function setup(){
    createCanvas( windowWidth, windowHeight);

    playerYpos= height/2;


    enemyXpos= random((height/2)-roadWidth/2.5,(height/2) + roadWidth/2.5);
    enemyYpos = random((height/2)-roadWidth/2.5,(height/2) + roadWidth/2.5);
    
    enemy2Xpos= random((height/2)-roadWidth/2.5,(height/2) + roadWidth/2.5);
    enemy2Ypos = random((height/2)-roadWidth/2.5,(height/2) + roadWidth/2.5);
    
    
    reset();

}

function draw(){

    if(gameState === "START"){
        textAlign(CENTER);
        textSize(50);  
        text("KRASCHA INTE!!!", width / 2, height / 2);
        textSize(20);
        text("TRYCK PÅ SPACE FÖR ATT STARTA", width / 2, 500);
    
    } else if(gameState === "PLAY"){
    playerYpos = constrain(playerYpos,(height/2)-roadWidth/2.5,(height/2) + roadWidth/2.5);
    
    

    background( 85, 164, 38 );
    if( crashed === false){
        if(keyIsDown("w")){
            playerYpos=playerYpos-playerTurnSpeed*deltaTime;

        }
        if(keyIsDown("s")){
            playerYpos= playerYpos+playerTurnSpeed*deltaTime;

        }
        if(keyIsDown("d")){
            playerXpos= playerXpos+playerTurnSpeed*deltaTime;
        }

        if(keyIsDown("a")){
            playerXpos= playerXpos-playerTurnSpeed*deltaTime;
        }
    }
    if(crashed === true){
        fill("orange");
        textSize(30);
        textAlign(CENTER);
        text("DU CRASHADE!", width / 2, height / 2);
      } else{

      }
      textSize(30);
      fill(255);
      text("Points:" + round(point), 100, 100);
      if(crashed === false){

        point += pointSpeed;
     
      } 
    
    fill(75);
    noStroke();
    rect(0, (height/2)-roadWidth/2, width, roadWidth );

    stroke(255);
    strokeWeight(6);
    line(0, height/2, width, height/2);
    noStroke();

    fill(255, 125, 125);
    rect(playerXpos,playerYpos - playerWidth/2, playerHeight,playerWidth);

    fill(125, 125, 255);
    rect(enemyXpos,enemyYpos - enemyWidth/2, enemyHeight,enemyWidth);

    fill(255, 255, 125);
    rect(enemy2Xpos,enemy2Ypos - enemy2Width/2, enemy2Height,enemy2Width);

    enemyXpos -= enemyTurnSpeed;
    enemy2Xpos -= enemy2TurnSpeed;

    if(enemyXpos<0-width/2){
        enemyXpos= width*1.5;
        enemyYpos = random((height/2)-roadWidth/2.5,(height/2) + roadWidth/2.5);
    }

    if(enemy2Xpos<0-width/2){
        enemy2Xpos= width*1.5;
        enemy2Ypos = random((height/2)-roadWidth/2.5,(height/2) + roadWidth/2.5);
    }

    d=dist(playerXpos, playerYpos, enemyXpos, enemyYpos);
    if(d< playerWidth){
        gameState= "GAMEOVER";
    }

    d=dist(playerXpos, playerYpos, enemy2Xpos, enemy2Ypos);
    if(d< playerWidth){
        gameState= "GAMEOVER";
    }

}   if( gameState === "GAMEOVER"){
    fill(255, 0, 0)
    text("GAMEOVER", width / 2, height /2);
}
}

function keyPressed(){
    if(keyCode === 32 ){
        reset();
    }
}

function reset(){

    
    playerXpos= 50;
    playerWidth= 70;
    playerHeight= 100;
    playerTurnSpeed= 0.5;

    enemyXpos= width-50;
    enemyWidth= 70;
    enemyHeight= 100;
    enemyTurnSpeed= 20;

    enemy2Xpos= width-50;
    enemy2Width= 70;
    enemy2Height= 100;
    enemy2TurnSpeed= 15;

    crashed= false;
    gameState="PLAY";
    point= 0;


}


