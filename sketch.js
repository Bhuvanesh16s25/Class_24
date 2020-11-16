const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, ground, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;

function setup(){
    var canvas = createCanvas(1800,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1400,700,50,50);
    ground = new Ground(900,780,1800,20);
    box2 = new Box(1600,700,50,50);
    pig1 = new Pig(1500,700,45,45);
    log1 = new Log(1500,600,300,PI/2);
    box3 = new Box(1400,500,50,50);
    box4 = new Box(1600,500,50,50);
    pig2 = new Pig(1500,500,45,45);
    log2 = new Log(1500,400,300,PI/2);
    box5 = new Box(1500,350,50,50);
    log3 = new Log(1400,300,145,PI/5);
    log4 = new Log(1600,300,145,-PI/5);
    bird = new Bird(200,200,50,50);


}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);

    box1.display();
    ground.display();
    box2.display();
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