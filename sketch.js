const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2 , box3 , box4 , box5;
var pig1 , pig2 ;
var log1 , log2 , log3 , log4 ; 
var bird ; 

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,300,100,100);
    box2 = new Box(1100,300,100,100);
    ground = new Ground(600,height,1200,50)
    pig1 = new Pigs(950,300)
    log1 = new Log(950,200,420,PI/2)
    box3 = new Box(800,150,100,100);
    box4 = new Box(1100,150,100,100);
    pig2 = new Pigs(950,150)
    log2 = new Log(950,100,420,PI/2);
    box5 = new Box(950,50,100,100)
    log3 = new Log(870,20,250, PI/4)
    log4 = new Log(1000,20,250,PI/-4)
    bird = new Bird(400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}