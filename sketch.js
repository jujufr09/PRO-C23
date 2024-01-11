//Crie um namespace (espaço de nomes) para Mecanismo
const Engine = Matter.Engine;
//Crie um namespace (espaço de nomes) para Mundo
const World = Matter.World;
//Crie um namespace (espaço de nomes) para Corpos
const Bodies = Matter.Bodies;
//Crie um namespace (espaço de nomes) para Corpo
const Body = Matter.Body;
//---------------------------------------------------------------------------------------------------------------------------------//
let engine;
let world;
var ball;
var ball2;
var ball3;
var ball4;
var ground;
var wedge;
var wedge2;
var wedge3;
var wall2;
var angle = 60;
var angle2 = 30;
var angle3 = 15;
var poly;
//---------------------------------------------------------------------------------------------------------------------------------//
function setup() {
  createCanvas(400, 400);
  //crie o mecanismo
  engine = Engine.create();
  //Adicione mundo ao mecanismo
  world = engine.world;

  var ball_options = {
    restitution: 0.1,
    frictionAir: 0.10,
  };
  var ground_options = {
    isStatic: true,
  };
  var ops
  {
    isStatic: true;
  }

  //crie o solo
  ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
  World.add(world, ground);
  //bola1
  ball = Bodies.circle(200, 10, 20, ball_options);
  World.add(world, ball);
  //bola2
  ball2 = Bodies.circle(199, 10, 20, ball_options);
  World.add(world, ball2);
  //bola3
  ball3 = Bodies.circle(201, 10, 20, ball_options);
  World.add(world, ball3);
  //bola4
  ball4 = Bodies.circle(200, 11, 20, ball_options);
  World.add(world, ball4);
  //chao-voador-1
  wall = Bodies.rectangle(300, 250, 70, 10, ground_options);
  World.add(world, wall);
  //chao-voador-2
  wall2 = Bodies.rectangle(100, 250, 70, 10, ground_options);
  World.add(world, wall2);
  //fan
  wedge = Bodies.rectangle(200, 150, 100, 20, ground_options);
  World.add(world, wedge);
  //fan2
  wedge2 = Bodies.rectangle(200, 150, 100, 20, ground_options);
  World.add(world, wedge2);
  //fan3
  wedge3 = Bodies.rectangle(200, 150, 100, 20, ground_options);
  World.add(world, wedge3);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background("lightpink");
  Engine.update(engine);
  Matter.Body.rotate(wedge, angle);
  push();
  translate(wedge.position.x, wedge.position.y);
  rotate(angle);
  rect(0, 0, 100, 20);
  pop();
  angle += 0.1;

  Engine.update(engine);
  Matter.Body.rotate(wedge2, angle2);
  push();
  translate(wedge2.position.x, wedge2.position.y);
  rotate(angle2);
  rect(0, 0, 100, 20);
  pop();
  angle2 += 0.1;

  Engine.update(engine);
  Matter.Body.rotate(wedge3, angle3);
  push();
  translate(wedge3.position.x, wedge3.position.y);
  rotate(angle3);
  rect(0, 0, 100, 20);
  pop();
  angle3 += 0.1;


  ellipse(ball.position.x, ball.position.y, 12);
  ellipse(ball2.position.x, ball2.position.y, 12);
  ellipse(ball3.position.x, ball3.position.y, 12);
  ellipse(ball4.position.x, ball4.position.y, 12);
  //escreva uma função de retângulo para exibir o solo.
  rect(ground.position.x, ground.position.y, 600, 35);

  rect(wall.position.x, wall.position.y, 90, 12);
  rect(wall2.position.x, wall2.position.y, 90, 12);
}



