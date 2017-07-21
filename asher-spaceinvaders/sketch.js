var x =400
var y =800

function setup() {
createCanvas(1000, 1000);
background("black");
}

function draw() {
  if (keyIsDown(LEFT_ARROW))
    x-=5;

  if (keyIsDown(RIGHT_ARROW))
    x+=5;

  if (x>= 1000 ){x=0}
  else if (x<= 0){x=1000}           


    background("black");
    fill("blue");
    rect(x, y, 55, 55);

    //enemies 
    fill("red");
    rect(30, 20, 50, 50);

    fill("red");
    rect(90,20,50,50);

    fill("red");
    rect(150,20,50,50);

    fill("red");
    rect(220,20,50,50);

    fill("red");
    rect(280,20,50,50);

    fill("red");
    rect(340,20,50,50);

    fill("red");
    rect(400,20,50,50);

    fill("red");
    rect(470,20,50,50);

    fill("red");
    rect(530,20,50,50);

    fill("red");
    rect(590,20,50,50);

    fill("red");
    rect(650,20,50,50);

    fill("red");
    rect(720,20,50,50);

    fill("red");
    rect(780,20,50,50);

    fill("red");
    rect(840,20,50,50);

var c = color(105, 204, 5);
  fill(c);

 rect( 50, 680, 90, 90);
  rect(220, 680, 90, 90);
  rect(390, 680, 90, 90);
  rect(560, 680, 90, 90);

fill("white");
rect(790,890,200,100);

fill("black");
textSize(30);
text("Score:",900,890);






    
}


