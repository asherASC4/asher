function randletter(){
    var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"  ]

    var randomNumber = Math.floor(Math. random() * letters.length - 1);



    var randomletter = letters[randomNumber];

    return randomletter
}
console.log(randletter());






//Random word, creates a word from a random length form random letters
function randWord(){
    // Random Length of random numbers 

   var randomLength = Math.floor(Math.random() * 20);
   console.log("This is the random length: " + randomLength);

 //Get a random letters

    for(var i=0; i<randomLength; i++){

      var randomLetter = randLetter();
    console.log(randomLetter);  
    }
    
}
randWord();