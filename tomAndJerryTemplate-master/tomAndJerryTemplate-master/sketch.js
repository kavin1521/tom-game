 var garden,cat,mouse;
 var gardenimg,cat1img,cat2img,cat3img,mouse1img,mouse2img,mouse3img;

 var PLAY=1;
 var END=0;
 var gameState=PLAY;

function preload() {

 gardenimg=loadImage("garden.png");

 cat1img=loadImage("cat1.png");
 cat2img=loadAnimation("cat2.png","cat3.png");
 cat3img=loadImage("cat4.png");

 mouse1img=loadImage("mouse1.png");
 mouse2img=loadAnimation("mouse2.png","mouse3.png");
 mouse3img=loadImage("mouse4.png");
 
}

function setup(){
    createCanvas(1000,800);
    
     garden=createSprite(500,400);
     garden.addImage(gardenimg);
     garden.scale = 1;

     cat=createSprite(900,600);
     cat.addImage(cat1img);
     cat.scale=0.1;

     mouse=createSprite(200,600);
     mouse.addImage(mouse1img);
     mouse.scale=0.1;

}

function draw() {

    background(255);

    if(gameState===PLAY){

        if(cat.x-mouse.x < cat.width/2 + mouse.width/2){

            gameState=END;
    
            }


        keyPressed();
    }

    if(gameState===END){

        cat.velocityX=0;

        cat.addAnimation("catsit",cat3img);
        cat.changeAnimation("catsit");

        mouse.addAnimation("mouse see",mouse3img);
        mouse.changeAnimation("mouse see");

    }

    drawSprites();
}


function keyPressed(){

 if(keyCode===LEFT_ARROW){

    cat.velocityX=-5;
    cat.addAnimation("catrunning",cat2img);
    cat.changeAnimation("catrunning");

    mouse.addAnimation("mouse",mouse2img);
    mouse.changeAnimation("mouse");
 }


}
