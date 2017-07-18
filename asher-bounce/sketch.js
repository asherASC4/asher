var x =50;
var y =250;
var xspeed = Math.floor(Math.random()* 10)
var yspeed = Math.floor(Math.random()* 10)


function setup(){
    createCanvas(300,300);
}
   
function draw(){
    background(225);
    ellipse(x,y,50,50);
    x += xspeed
    y += yspeed

    while(x>=250){
        x-=100
    }   

    while(y<=50){
        x+=10
    }
}
