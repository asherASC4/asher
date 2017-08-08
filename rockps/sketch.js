var score = 0;
var games = 0;
var userChoice = "";
var computerChoice = 0;

function printer(msg) {
  document.getElementById('result').innerHTML = msg;
  document.getElementById('score').innerHTML = score + "/" + games;
}

// reseting
document.getElementById('reset').onclick = function() {
  score = 0;
  games = 0;
  printer("&nbsp;");
}

// handling user's choice
function userChose(choice){
    userChoice = choice;
     compare(userChoice, compChoose());
}

// handling computer's choice
function compChoose() {
  computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = "rock";
  } else if (computerChoice < 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissor";
  }
  return computerChoice;
}

// comparison
// parameters have to be in "you, me" order!
function compare(user, comp) {
  var result = "";
  if (user === comp) {
    // not sure how a tie should affect the score so it just doesn't ¯\_(ツ)_/¯
    result = "tie";
  } else if (user === "rock") {
    games++;
    if (comp === "paper") {
      result = "i chose paper. you lose."
    } else {
      result = "i chose scissor. you win."
      score++;
    }
  } else if (user === "paper") {
    games++;
    if (comp === "scissor") {
      result = "i chose scissor. you lose."
    } else {
      result = "i chose rock. you win."
      score++;
    }
  } else {
    games++;
    if (comp === "rock") {
      result = "i chose rock. you lose."
    } else {
      result = "i chose paper. you win."
      score++;
    }
  }
  printer(result);
}