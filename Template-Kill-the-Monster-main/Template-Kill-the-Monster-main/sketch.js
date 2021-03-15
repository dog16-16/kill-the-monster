const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backImg;
var supHero,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,m1,m2;

function preload()
{
  //preload the images here

  backImg = loadImage("GamingBackground.png");
 // m1Img = loadImage("Monster-01.png");
 // m2Img = loadImage("Monster-02.png");
  
}

function setup()
{
  createCanvas(3000, 800);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  // create sprites here

  ground = new Ground(600,600,1200,20);

  supHero = new Hero(200,500,150);

  m1 = new Monster(500,500,50,50);

  b1 = new Block(500,520,60,60);
  //b1.addImage(m1Img);
  b2 = new Block(500,535,60,60);
 // b2.addImage(m1Img);
  b3 = new Block(500,545,60,60);
 // b3.addImage(m1Img);
  b4 = new Block(500,555,60,60);
 // b4.addImage(m1Img);
  b5 = new Block(500,565,60,60);
 // b5.addImage(m1Img);
  b6 = new Block(500,575,60,60);
 // b6.addImage(m1Img);
  b7 = new Block(500,585,60,60);
 // b7.addImage(m1Img);
  b8 = new Block(515,520,60,60);
 // b8.addImage(m1Img);
  b9 = new Block(515,535,60,60);
 // b9.addImage(m1Img);
  b10 = new Block(515,545,60,60);
 // b10.addImage(m1Img);
  b11 = new Block(515,555,60,60);
 // b11.addImage(m2Img);
  b12 = new Block(515,565,60,60);
 // b12.addImage(m2Img);
  b13 = new Block(515,575,60,60);
 // b13.addImage(m2Img);
  b14 = new Block(515,585,60,60);
 // b14.addImage(m2Img);
  b15 = new Block(530,520,60,60);
 // b15.addImage(m2Img);
  b16 = new Block(530,535,60,60);
  //b16.addImage(m2Img);
  b17 = new Block(530,545,60,60);
 // b17.addImage(m2Img);
  b18 = new Block(530,555,60,60);
 // b18.addImage(m2Img);
  b19 = new Block(530,565,60,60);
 // b19.addImage(m2Img);
  b20 = new Block(530,575,60,60);
 // b20.addImage(m2Img);
}

function draw()
{
background(backImg);

Engine.update(engine);

  ground.display();

  supHero.display();

  m1.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
}

function mouseDragged()
{
  Matter.Body.setPosition(supHero.body, {x:mouseX, y:mouseY});
}


