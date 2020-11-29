const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var plinkos = [];
var division = [];
var particles = [];

var divisionHeight = 300;

function setup(){
    var canvas = createCanvas(600,900);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    for (var j = 75; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,75)); 
      } 

    for (var j = 50; j <=width-10; j=j+50) {
         plinkos.push(new Plinko(j,175)); 
    }

    for (var j = 50; j <=width-10; j=j+50) {
      plinkos.push(new Plinko(j,275)); 
 }

    for (var j = 50; j <=width-10; j=j+50) {
  plinkos.push(new Plinko(j,375)); 
}

    for (var j = 50; j <=width-10; j=j+50) {
  plinkos.push(new Plinko(j,475)); 
}

    for (var k = 0; k<=width; k = k + 80) {
      division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
    }

}

function draw(){
    background("black");    
    
    Engine.update(engine);

    ground.display();

    for (var i = 0; i < plinkos.length; i++) { 
      plinkos[i].display(); 
    }

    for (var j = 0; j < particles.length; j++) {
      particles[j].display();
    }

    for (var k = 0; k < divisions.length; k++) {
      divisions[k].display();
    }

}

