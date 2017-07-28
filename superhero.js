function Superhero(realName, ability, gender, archEnemy, age, weakness){
    this.realName = realName;
    this.ability = ability;
    this.gender = gender;
    this.archEnemy = archEnemy;
    this.age = age;
    this.weakness = weakness;

this.talk = function(){
    console.log("Yo my name is  " + realName);
}

this.callForHelp = function(call){
    console.log(call);
    }
}


var superMan = new Superhero("clark kent","everything","male","lex luther", 21, "kryptonite");
var wonderWoman = new Superhero("Dianne Prince", "Super Strength", "Female", "Donald Trump", 20, "fried chicken");

superMan.ability = "lazer vision";

console.log(superMan);

//change wonderwomans archEnemy 

wonderWoman.archEnemy = superMan.realName ;


wonderWoman.callForHelp("I'm booling out");

superMan.callForHelp("Its not looking good rn")