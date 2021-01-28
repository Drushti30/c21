//Program to make algorithm for bouncing sprites
var car, wall;
var carImage;
var wall2;

function preload()
{
    carImage=loadImage("car.png");
}
function setup()
{
    createCanvas(1000,600)

    car=createSprite(350,100,50,50);
    car.addImage(carImage)
    car.scale=0.7;
    wall=createSprite(100,200,60,300)
    car.shapeColor=wall.shapeColor="yellow"
    car.velocityX=20;
    wall2=createSprite(800,300,50,400)
     

}

function draw()
{
    background(0);
     //console.log("Width Gap " + (car.x-wall.x )+ " "+(car.width/2+wall.width/2))
     //console.log("Height Gap "+ (car.y-wall.y )+ " " +(car.height/2+wall.height/2))
     
    //bouncing algorithm

    bounce(car,wall2)

    bounce(car,wall)
    
   

    drawSprites();
}

