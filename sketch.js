//Creating Sprites for players, ball and edges  
   var player1, player2, ball;
   var edges;
   var player1score = 0;
   var player2score = 0;

 function setup(){
     createCanvas(windowWidth, windowHeight);

     player1 = createSprite(windowWidth - 10, windowHeight/2, 20, 200);
     player1.shapeColor = "red";

     player2 = createSprite(10, windowHeight/2, 20, 200);
     player2.shapeColor = "blue";

     ball = createSprite(windowWidth/2, windowHeight/2, 15, 15);
     ball.shapeColor = "green"; 

     edges = createEdgeSprites();
}


 function draw (){
     background ("white");

  if(keyDown("UP_ARROW")){
     player1.y = player1.y - 5;
}

  if(keyDown("DOWN_ARROW")){
     player1.y = player1.y + 5;
}

     player2.y = ball.y;

  if(keyDown("space")){
     ball.velocityX = 4;
     ball.velocityY = 4;
}

  if(ball.x > windowWidth){
     ball.y = windowHeight/2;
     ball.x = windowWidth/2;

     ball.velocityX = 0;
     ball.velocityY = 0;

     player1.y = windowHeight/2;
     player2.y = windowHeight/2;

     player2score = player2score + 1;
}

  if(ball.x < 0){
     ball.y = windowHeight/2;
     ball.x = windowWidth/2;

     ball.velocityX = 0;
     ball.velocityY = 0;

     player1.y = windowHeight/2;
     player2.y = windowHeight/2;

     player1score = player1score + 1;
}
  if(player1score === 5){
     fill("blue");
     stroke("blue");
     textSize(40);
     text("Player 1 won", windowWidth/2 - 100, windowHeight/2 - 50);
     text("Prees R to Restart", windowWidth/2 - 100, windowHeight/2 + 40);
 }

  if(player2score === 5){
     fill("blue");
     stroke("blue");
     textSize(40);
     text("Player 2 won", windowWidth/2 - 100, windowHeight/2 - 50);
     text("Press R to Restart", windowWidth/2 - 100, windowHeight/2 + 40);
}

  if(keyDown("r")){
     player1score = 0;
     player2score = 0;
}

   for(var i = 0; i < windowHeight; i = i + 20){
     fill("grey");
     stroke("grey");
     strokeWeight(2.5);
     line(windowWidth/2, i, windowWidth/2, i + 10);
}

     player1.collide(edges[3]);
     player1.collide(edges[2]);
    
     ball.bounceOff(edges[3]);
     ball.bounceOff(edges[2]);
     ball.bounceOff(player1);
     ball.bounceOff(player2);

     drawSprites();

     fill("black");
     stroke("black");
     textSize(30);
     text(player1score, windowWidth/2 + 25, 25);
     text(player2score, windowWidth/2 - 40, 25);
}