//title of game
var txt_titleImg, title;

//2 player choices
var bunny, alien;

//different alien animation variations
var alienWalkImg, alienDuckImg, alienHurtImg, alienJumpImg, alienStandImg;

//different bunny animation variations
var bunnyWalkImg, bunnyHurtImg, bunnyJumpImg, bunnyStandImg;

//obstacle/enemie animations
var blackBeeImg, yellowBeeImg, flyBotImg, spikeBotImg, wingBotImg, snailImg;

//prize images
var coinImg, chocolateImg, peppermintImg;

//different backgrounds for different moments in the game
var desertImg, desert, beginnerImg, beginner;

//images for buttons throughout the game
var nextImg, next1, next2, next3;

//text to help guide players
var txt_instructionImg, txt_instruction;
var txt_tipImg, txt_tip;
var txt_characterChoose, txt_characterChooseImg, txt_notChosen;


//the ground under the bunny/alien to prevent it from falling that will be invisible
var invisiGround;

//resolution of game where enemiies apologize to the bunny/alien
var endImg, txt_end;

//buttons that the player chooses to apologize or not to apologize to enemies
var txt_sorry, sorryImg, txt_not_sorry, not_sorryImg;

//Everything after the player makes their choice to not to apologize to enemies
var txt_not_sorry_message, txt_not_sorry_messageImg;
//this image will be the background of when the player chooses to not say sorry
var smoke, smokeImg;
//black/blank images to show as a background
var blackImg1, black1, blackImg2, black2;
//ghost will show up when the player chooses not to say sorry & will be looking around/nodding no at the player for their choice
var ghostImg, ghost;

//Everything after the player makes their choice to apologize to enemies
var party, partyImg;
var medalImg;


//Game Over, this will take the player back to gameState = "start"
var restartImg, restart;
//game over animation
var gameOverImg, gameOver;

//this will set the score to 0 before the game starts
var score = 0;

//this is the gameState that is set at the beginning/title
var gameState = "steps";
// var gameState = "choose";

//this is the variable that will be set after the player chooses their character
//after they choose their character the "player" variable will be set to wither bunny or alien
var player;

//groups for prizes & obstacles
var obstacleGroup;
var prizeGroup;

//preload all the images/animations
function preload() {
  //title of game
  txt_titleImg = loadImage("text/title.png");

  //different alien animation variations
  alienWalkImg = loadAnimation("images/alien/alien-walk-1.png", "images/alien/alien-walk-2.png");
  alienDuckImg = loadImage("images/alien/alien-duck.png");
  alienHurtImg = loadImage("images/alien/alien-hurt.png");
  alienJumpImg = loadImage("images/alien/alien-jump.png");
  alienStandImg = loadImage("images/alien/alien-stand.png");

  //different bunny animation variations
  bunnyWalkImg = loadAnimation("images/bunny/bunny-run-1.png", "images/bunny/bunny-run-2.png");
  bunnyHurtImg = loadAnimation("images/bunny/bunny-hurt.png");
  bunnyJumpImg = loadAnimation("images/bunny/bunny-jump.png");
  bunnyStandImg = loadAnimation("images/bunny/bunny-stand.png");

  //obstacle/enemy animations
  blackBeeImg = loadAnimation("images/bees/black-grey-bee-1.png", "images/bees/black-grey-bee-2.png");
  yellowBeeImg = loadAnimation("images/bees/yellow-bee-1.png", "images/bees/yellow-bee-2.png");
  flyBotImg = loadAnimation("images/bots/fly-bot-1.png", "images/bots/fly-bot-2.png");
  spikeBotImg = loadAnimation("images/bots/spike-bot-1.png", "images/bots/spike-bot-2.png");
  wingBotImg = loadAnimation("images/bots/wing-1.png", "images/bots/wing-2.png", "images/bots/wing-3.png", "images/bots/wing-4.png", "images/bots/wing-5.png", "images/bots/wing-6.png", "images/bots/wing-7.png", "images/bots/wing-8.png");
  snailImg = loadAnimation("images/snail.png");

  //prize images
  coinImg = loadAnimation("images/coin/coin-1.png", "images/coin/coin-2.png", "images/coin/coin-3.png", "images/coin/coin-4.png", "images/coin/coin-5.png", "images/coin/coin-6.png");
  chocolateImg = loadAnimation("images/chocolate.png");
  medalImg = loadAnimation("images/badge.png");
  peppermintImg = loadAnimation("images/peppermint.png");

  //different backgrounds for different moments in the game
    //countinuous desert behind bunny/alien during game
    desertImg = loadImage("images/desert_3.png");
    //stationary background at the beginning of the game
    beginnerImg = loadImage("images/beginning_big.jpg");
    //black/blank backgrounds
    blackImg1 = loadImage("images/black.jpg");
    blackImg2 = loadImage("images/black.jpg");
    //background for when player chooses to say sorry
    partyImg = loadImage("images/party.jpg");
    //this image will be the background of when the player chooses to not say sorry
    smokeImg = loadImage("images/smoke.jpg");

  //animation telling player that it is game over
  gameOverImg = loadAnimation("text/game over/go1.png", "text/game over/go2.png", "text/game over/go3.png", "text/game over/go4.png", "text/game over/go5.png", "text/game over/go6.png", "text/game over/go7.png", "text/game over/go8.png", "text/game over/go9.png");

  //images for buttons throughout the game
    nextImg = loadImage("text/next.png");
    //buttons that the player chooses to apologize or not to apologize to enemies
    sorryImg = loadImage("text/sorry.png");
    not_sorryImg = loadImage("text/not_sorry.png");
    //this button is for when the player touches an enemy and it is Game Over, this will take the player back to gameState = "start"
    restartImg = loadImage("text/restart.png");

  //text to help guide players
    //instructions to guide player
    txt_instructionImg = loadImage("text/instructions.png");
    //tips to guide player
    txt_tipImg = loadImage("text/tips.png");
    //subtext to tell player to choose bunny/alien
    txt_characterChooseImg = loadImage("text/character choose.png");
    //text that displays next to the player that was not chosen
    txt_notChosen = loadImage("text/you didnt choose me.png");

  //resolution of game where enemiies apologize to the bunny/alien
  endImg = loadImage("text/end_good_job.png");

  //message that will be displayed after the player makes their choice to not to apologize to enemies
  txt_not_sorry_messageImg = loadImage("text/message_for_not_sorry.png");

  //ghost that looks back & forth/nodds no at player for theit choice
  ghostImg = loadAnimation("images/ghost/ghost1.png", "images/ghost/ghost2.png");
}

//make all the sprites & upload images/animations from above to the sprite
function setup() {
  createCanvas(windowWidth, windowHeight);

  //backgrounds for different points in the game
  beginner = createSprite(width/2, 0, width, height);
  beginner.addImage("starting image", beginnerImg);
  beginner.visible = false;
  beginner.scale = 1;

  desert = createSprite(width/2, 0, width, height);
  desert.addImage("desert", desertImg);
  desert.visible = false;

  //when the player chooses not to apologize
  black1 = createSprite(width/2, height/2);
  black1.addImage(blackImg1);
  black1.visible = false;

  black2 = createSprite(width/2, height/2);
  black2.addImage(blackImg2);
  black2.visible = false;

  smoke = createSprite(width/4, height/1.4);
  smoke.addImage(smokeImg);
  smoke.scale = 1;
  smoke.visible = false;

  txt_not_sorry_message = createSprite(width/1.3, height/2);
  txt_not_sorry_message.addImage(txt_not_sorry_messageImg);
  txt_not_sorry_message.scale = 0.45;
  txt_not_sorry_message.visible = false;

  ghost = createSprite(width/2, height/2);
  ghost.addAnimation("ghost looking left and right", ghostImg);
  ghost.scale = 1.2;
  ghost.visible = false;

  //when the player chooses to apologize
  party = createSprite(width/2, height/4);
  party.addImage(partyImg);
  party.scale = 1.5;
  party.visible = false;

  medal = createSprite(width/2, height/2);
  medal.addAnimation("picture of a white and purple medal", medalImg);
  medal.scale = 0.4;
  medal.visible = false;

  //next buttons to take the player through different gameStates
  next1 = createSprite(width/1.1, height/1.2);
  next1.addImage(nextImg);
  next1.scale = 0.3;

  next2 = createSprite(width/1.1, height/5);
  next2.addImage(nextImg);
  next2.scale = 0.3;
  next2.visible = false;

  next3 = createSprite(width/2, height/2);
  next3.addImage(nextImg);
  next3.scale = 0.3;
  next3.visible = false;

  //title
  title = createSprite(width/2, height/2);
  title.addImage("game title", txt_titleImg);
  title.scale = 0.4;
  title.visible = false;

  //guide the player through the game
  txt_instruction = createSprite(width/4, height/3);
  txt_instruction.addImage(txt_instructionImg);
  txt_instruction.scale = 0.3;
  txt_instruction.visible = false;

  txt_tip = createSprite(width/1.3, height/1.5);
  txt_tip.addImage(txt_tipImg);
  txt_tip.scale = 0.3;
  txt_tip.visible = false;

  txt_characterChoose = createSprite(width/2, 200, 750, 100);
  txt_characterChoose.addImage("character choose text?", txt_characterChooseImg);
  txt_characterChoose.scale = 0.5;
  txt_characterChoose.visible = false;


  //different bunny animations
  bunny = createSprite(width/2-200, 500);
  bunny.addAnimation("bunnyStanding", bunnyStandImg);
  bunny.addAnimation("bunnyWalking", bunnyWalkImg);
  bunny.addAnimation("bunnyHurting", bunnyHurtImg);
  bunny.addAnimation("bunnyJumping", bunnyJumpImg);
  bunny.scale = 3;
  bunny.visible = false;

  // different alien animations
  alien = createSprite(width/2+200, 500);
  alien.addAnimation("alienStanding", alienStandImg);
  alien.addAnimation("alienWalking", alienWalkImg);
  alien.addAnimation("alienHurting", alienHurtImg);
  alien.addAnimation("alienJumping", alienJumpImg);
  alien.scale = 3;
  alien.visible = false;



  //resolution of game where enemies apologize
  txt_end = createSprite(width/1.2, height/1.5);
  txt_end.addImage("all characters congratulate player", endImg);
  txt_end.scale = 0.3;
  txt_end.visible = false;

  //buttons to choose between apologizing & not
  txt_sorry = createSprite(width/3.5, height/5);
  txt_sorry.addImage(sorryImg);
  txt_sorry.scale = 0.3;
  txt_sorry.visible = false;

  txt_not_sorry = createSprite(width/1.5, height/5);
  txt_not_sorry.addImage(not_sorryImg);
  txt_not_sorry.scale = 0.3;
  txt_not_sorry.visible = false;

  //game over animation
  gameOver = createSprite(width/2, height/2);
  gameOver.addAnimation("animation talling player that game is over", gameOverImg);
  gameOver.scale = 0.5;
  gameOver.visible = false;

  //restart button to take player to gameState = "start"
  restart = createSprite(width/2, height/4);
  restart.addImage(restartImg);
  restart.scale = 0.7;
  restart.visible = false;

  //groups
  obstacleGroup = new Group();
  prizeGroup = new Group();
}

//function to apwn obstacles to prevent player from winning the game
function spawnObstacles() {
  if (World.frameCount%100 === 0) {
    var obstacle = createSprite(windowWidth+50,0);
    obstacle.addAnimation("blackbee", blackBeeImg);
    obstacle.addAnimation("yellowbee", yellowBeeImg);
    obstacle.addAnimation("flyingrobot", flyBotImg);
    obstacle.addAnimation("spikyrobot", spikeBotImg);
    obstacle.addAnimation("wingybot", wingBotImg);

    obstacle.y = random(windowHeight/1.5,windowHeight/4);

    var rand = Math.round(random(1,5));
    // console.log(rand);

    switch(rand) {
      case 1:
        obstacle.changeAnimation("blackbee", blackBeeImg);
        break;
      case 2:
        obstacle.changeAnimation("yellowbee", yellowBeeImg);
        break;
      case 3:
        obstacle.changeAnimation("flyingrobot", flyBotImg);
        break;
      case 4:
        obstacle.changeAnimation("spikyrobot", spikeBotImg);
        break;
      case 5:
        obstacle.changeAnimation("wingybot", wingBotImg);
        break;
      default:
        break;
    }

    // obstacle.addImage(random(blackBeeImg, yellowBeeImg, flyBotImg, spikeBotImg, wingBotImg));
    // obstacle.scale = 0.5;
    obstacle.velocityX = -5;

    
     //assign lifetime to the variable
    obstacle.lifetime = windowWidth;

    obstacleGroup.add(obstacle);
  }

  if (desert.x === windowWidth) {
    desert.x = desert.width/2;
  }
}

//function to spawn prizes that the player needs to collect to win
function spawnPrizes() {
  if (World.frameCount%137 === 0) {
    var prize = createSprite(windowWidth+50, 0);
    prize.addAnimation("turningCoin", coinImg);
    prize.addAnimation("chocolate", chocolateImg);
    prize.addAnimation("peppermint", peppermintImg);

    prize.y = random(windowHeight/1.5,windowHeight/4);
    prize.velocityX = -5;

    var rand = Math.round(random(1,3));

    switch(rand) {
      case 1:
        prize.changeAnimation("turningCoin", coinImg);
        break;
      case 2:
        prize.changeAnimation("chocolate", chocolateImg);
        break;
      case 3:
        prize.changeAnimation("peppermint", peppermintImg);
        break;
      default:
        break;
    }
    
     //assign lifetime to the variable
    prize.lifetime = windowWidth;

    prizeGroup.add(prize);
  }

  if (desert.x === windowWidth) {
    desert.x = desert.width/2;
  }
}

function draw() {
  background(255);

  drawSprites();

  //very beginning gameState to show title
  if(gameState === "steps") {
    beginner.visible = true;
    beginner.x = beginner.width/2;

    title.visible = true;
    
    if(mousePressedOver(next1)) {
      title.destroy();
      gameState = "instructions";
    }

    //gameState that will display instructions & tips on how to win
  } else if(gameState === "instructions") {
    next1.destroy();
    title.visible = false;
    // next1.visible = false;

    txt_instruction.visible = true;

    txt_tip.visible = true;

    next2.visible = true;

    if(mousePressedOver(next2)) {
      gameState = "choose";
    }

    //gameState for the player to choose between bunny/alien
  } else if(gameState === "choose") {
    txt_tip.destroy();
    txt_instruction.destroy();
    next2.destroy();
    
    bunny.visible = true;
  
    alien.visible = true;

    next3.visible = true;
  
    txt_characterChoose.visible = true;



    // change bunny into "player" if chosen & display text for alien that was not chosen
    if(mousePressedOver(bunny)) {
      image(txt_notChosen, width/2+300, 300, 450, 300);
      player = "bunny";
    }

    //change alien into "player" if chosen & display text for bunny that was not chosen
    if(mousePressedOver(alien)) {
      image(txt_notChosen, width/2-750, 300, 450, 300);
      player = "alien";
    }

    if(mousePressedOver(next3)) {
      gameState = "start";
    }

    //start playing the game
  } else if(gameState === "start") {
    beginner.destroy();
    bunny.visible = false;
    alien.visible = false;
    next3.destroy();
    txt_characterChoose.destroy();

    bunny.changeAnimation("bunnyWalking", bunnyWalkImg);
    alien.changeAnimation("alienWalking", alienWalkImg);

    desert.visible = true;
    desert.scale = 1;
    // desert.x = desert.width/2;
    desert.velocityX = -5;

    if (desert.x <= 0) {
      desert.x = desert.width/2;
    }

    //display score
    textSize(25);
    fill(0);
    text("🏆 𝕊𝕔𝕠𝕣𝕖: "+ score, width/15-75, height/10-25);

    //invisible ground under bunny/alien
    invisiGround = createSprite(windowWidth/2, windowHeight-77, windowWidth, 7);
    invisiGround.visible = true;


    if(player === "bunny") {
      bunny.visible = true;
      // bunny.addImage("walking bunny", bunnyWalkImg);

      bunny.x = 75;
      // bunny.y = height-150;
      bunny.scale = 1.5;

      bunny.collide(invisiGround);

      for (let index = 0; index < prizeGroup.length; index++) {
        if(prizeGroup[index].isTouching(bunny)) {
          prizeGroup[index].destroy();
          score = score+1;
        }
      }

      if(obstacleGroup.isTouching(bunny)) {
        gameState = "over";
      }

      if(keyDown("up")) {
        bunny.changeAnimation("bunnyJumping", bunnyJumpImg);
        if(bunny.y >= height-152.5) {
          bunny.velocityY = -20 ;
          console.log(bunny.y);
        }
      }
    
      //add gravity
      bunny.velocityY = bunny.velocityY + 0.5;
      // bunny.changeAnimation("bunnyWalking", bunnyWalkImg);

      spawnObstacles();
      spawnPrizes();

    } else if(player === "alien") {
      alien.visible = true;
      // bunny.addImage("walking bunny", bunnyWalkImg);

      alien.x = 75;
      // bunny.y = height-150;
      alien.scale = 1.5;

      alien.collide(invisiGround);

      
      for (let index = 0; index < prizeGroup.length; index++) {
        if(prizeGroup[index].isTouching(alien)) {
          prizeGroup[index].destroy();
          score = score+1;
        }
      }

      if(obstacleGroup.isTouching(alien)) {
        gameState = "over";
      }


      //jump
      if(keyDown("up")) {
        alien.changeAnimation("alienJumping", alienJumpImg);
        if(alien.y >= height-152.5) {
          alien.velocityY = -20 ;
          console.log(alien.y);
        }
      }
    
      //add gravity
      alien.velocityY = alien.velocityY + 0.5;
      if(alien.collide(invisiGround)) {
        alien.changeAnimation("alienWalking", alienWalkImg);
      }

      spawnObstacles();
      spawnPrizes();
    }
    
  } else if(gameState === "over") {
    black1.visible = true;
    gameOver.visible = true;
    restart.visible = true;

    bunny.changeAnimation("bunnyHurting", bunnyHurtImg);
    alien.changeAnimation("alienHurting", alienHurtImg);

    obstacleGroup.destroyEach();
    prizeGroup.destroyEach();

    bunny.velocityY = 0;
    bunny.velocityY = bunny.velocityY+0.5;
    bunny.collide(invisiGround);
    
    alien.velocityY = 0;
    alien.velocityY = alien.velocityY+0.5;
    alien.collide(invisiGround);

    if(mousePressedOver(restart)) {
      black1.visible = false;
      gameOver.visible = false;
      restart.visible = false;

      score = 0;

      gameState = "start";
    }
  }
  
  if(gameState === "end") {
      txt_end.visible = true;
      txt_sorry.visible = true;
      txt_not_sorry.visible = true;

      if(mousePressedOver(txt_sorry)) {
        //display prizes
        // console.log("PRIZES");
        txt_end.destroy();
        txt_not_sorry.destroy();
        txt_sorry.destroy();

        party.visible = true;
        medal.visible = true;
        
      } else if(mousePressedOver(txt_not_sorry)) {
        //display prizes were stolen
        // console.log("STOLEN PRIZES");
        txt_end.destroy();
        txt_not_sorry.destroy();
        txt_sorry.destroy();

        black2.visible = true;
        smoke.visible = true;
        txt_not_sorry_message.visible = true;
        ghost.visible = true;
      }

      if (desert.x === windowWidth) {
        desert.x = desert.width/2;
      }
  }

}