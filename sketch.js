const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    bird = new Bird(200,200);

    box1 = new Box(640,300,70,70);
    box2 = new Box(860,300,70,70);
    box3 = new Box(650,200,70,70);
    box4 = new Box(850,200,70,70);
    box5 = new Box(750,50,50,50);

    pig1 = new Pig(750, 300);
    pig2 = new Pig(750, 175);

    log1 = new Log(750,250,300,PI/2);
    log2 = new Log(750,100,300,PI/2);
    log3 = new Log(710,30,125,PI/7);
    log4 = new Log(790,30,125,-(PI/7));
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    ground.display();

    bird.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();
}