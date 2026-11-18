let roadWidth= 400;

let playerXpos= 50;
let playerYpos;
let playerWidth= 70;
let playerHeight= 100;

let playerTurnSpeed= 0.5;

let enemyXpos= 50;
let enemyYpos;
let enemyWidth= 70;
let enemyHeight= 100;

let enemyTurnSpeed= 20;

let d;

let crashed= false;

let gamestate="START"







function setup(){
    createCanvas( windowWidth, windowHeight);

    playerYpos= height/2;

    enemyXpos= random((height/2)-roadWidth/2.5,(height/2) + roadWidth/2.5);
    enemyYpos = random((height/2)-roadWidth/2.5,(height/2) + roadWidth/2.5);


}

function draw(){

    if(gameState === "START"){          
        text("KRASCHA INTE!!", width / 2, height / 2);
        textSize(20);
        textAlign(CENTER);
        text("TRYCK PÅ SPACE FÖR ATT STARTA", width / 2, 500 );
        textSize(50);
    

    } else if(gamestate === "PLAY"){
    playerYpos = constrain(playerYpos,(height/2)-roadWidth/2.5,(height/2) + roadWidth/2.5);
    
    

    background( 85, 164, 38 );

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

    enemyXpos -= enemyTurnSpeed;

    if(enemyXpos<0-width/2){
        enemyXpos= width*1.5;
        enemyYpos = random((height/2)-roadWidth/2.5,(height/2) + roadWidth/2.5);
    }

    d=dist(playerXpos, playerYpos, enemyXpos, enemyYpos);
    if(d< playerWidth){
        playerTurnSpeed =0;
        gamestate= "GAMEOVER";
    }
}




}