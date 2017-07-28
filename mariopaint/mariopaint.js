function setup(){
    createCanvas(1000,1000);
    background(15);
    stroke("purple");
    strokeWeight(5);
}

function mouseDragged(){
    fill(random(["aqua","red","blue","purple","green"]));
    ellipse(mouseX, mouseY, random(200), random(200));
    rect(mouseX, mouseY, random(200), random(200));
    quad(mouseX, mouseY, random(200), random(200));
    return false;
}