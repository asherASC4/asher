function setup(){
    createCanvas(300,300);
    background(200);
    text("1995, 2005",10, 50);
    text("Seen it with my eyes, dope still alive, DOPE!", 10, 70);
    text("Real mob ties,real frog eyes, FROG!",10, 90);
    text("Real whole pies, all time high, HIGH!", 10, 110);
    text("Do it for the culture, CULTURE!",10,130);

}

var score = 0;

function keyTyped() {
  if (key === 'a') {
    score = 255;
  } else if (key === 'b') {
    value = 0;
  }

