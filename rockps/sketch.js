function myFunction() {
    var userChoice = prompt(" rock, paper or scissors?").toLowerCase();

var computerChoice = Math.random();

if (computerChoice < 0.34) {
 computerChoice = "rock";
} else if(computerChoice <= 0.67) {
 computerChoice = "paper";
} else {
 computerChoice = "scissors";
}

document.write("Computer chose: " + computerChoice);
document.write("<br>");
document.write("You chose: " + userChoice);
document.write("<br>");

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "You tied! try again.";
        prompt("Do you choose rock, paper or scissors?").toLowerCase();
    }
    else if (choice1 === "rock") {
        if(choice2 === "scissors") {
            return "rock wins";
        }
        else {
            return "paper wins";
        }  
    }
    else if (choice1 === "paper") {
        if(choice2 === "rock") {
            return "paper wins";
        }
        else {
            return "scissors win";
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        }
        else {
            return "scissors win";
        }
    }
   else {
       return "I'm sorry that is not a valid answer."
   }
    };
    document.write(compare(userChoice, computerChoice));
}

