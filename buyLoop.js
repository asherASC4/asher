var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
var money = 1000;

var louisVuittonDufflebag = [];

while(money > 100){
console.log("You have $" + money + "left")
var answer = prompt("You can buy yeezys for 400, gucci flip flops for 200, or ray bans for 100");

if(answer.toLowerCase() == "Yeezys" && money >= 500){
    money = money - 400;


    louisVuittonDufflebag.push("Yeezy's");
    console.log("You have succesfuly bought these pairs of yeezys");
}
else if(answer.toLowerCase() === "Gucci Flip Flops" && money >= 300){
    money = money -200;
    louisVuittonDufflebag.push("Gucci Flip Flops");
    console.log("You have successfuly bought this pair of Gucci Flip Flops");
}
else if(answer.toLowerCase() === "Ray Bans" && money >= 200){
    money = money - 100;
    louisVuittonDufflebag.push("Ray Bans");
    console.log("You have successfuly bought this pair of Ray Bans");
}
else{
    console.log("You can't get this item");
}
}
console.log("Leave your broke!");