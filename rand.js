function rand(number){
    var randomDecimalNumber = Math.random() * number;
console.log(randomDecimalNumber);

    var wholeintegerNumber = Math.round(randomDecimalNumber);


return wholeintegerNumber;

}

console.log(rand(6));