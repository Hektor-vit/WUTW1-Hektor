let isAlive

let roadWidth= 300;

let playerXpos= 50;
let playerYpos;
let playerWidth= 70;
let playerHeight= 100;

let playerTurnSpeed= 0.4;







function setup(){
    createCanvas( windowWidth, windowHeight);

    playerYpos= height/2;

}

function draw(){
    background( 85, 164, 38 );

    if(keyIsDown("w")){
        playerYpos=playerYpos-playerTurnSpeed*deltaTime;

    }

    if(keyIsDown("s")){
        playerYpos= playerYpos+playerTurnSpeed*deltaTime;

    }
    
    fill(75);
    noStroke();
    rect(0, (height/2)-roadWidth/2, width, roadWidth );

    stroke(255);
    strokeWeight(6);
    line(0, height/2, width, height/2);
    noStroke();

    fill(255, 125, 125);
    rect(playerXpos,playerYpos - playerWidth/2, playerXpos+playerHeight, playerWidth);



}