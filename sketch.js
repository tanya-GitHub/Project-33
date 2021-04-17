Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;
 
var plinkos = [];
var divisions = [];
var particle = [];

var divisionHeight=300;

var score = 0;
var numTurns = 5;
var gameState = "play";
var vCount = 0;
gameState == "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

//for the divisions
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

//plinkos - the dots across the screen
    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);

  textSize(30);
  text("Score: "+score, 20, 40);

  text("500", 15, 535);
  text("100", 95, 535);
  text("50", 185, 535);
  text("15", 265, 535);
  text("5", 350, 535);
  text("10", 425, 535);
  text("15", 505, 535);
  text("50", 585, 535);
  text("100", 655, 535);
  text("500", 735, 535);

  //display the dots
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }


   //display the divisions
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();

   }

   if(frameCount%60===0){
    particle.push(new Particle(random(100, 700), 10,10));
    score++
   }

   for (var j = 0; j < particle.length; j++) {
   
    particle[j].display();
  }

}
