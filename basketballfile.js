function BasketballPlayer(name, team, height, position, number, netWorth, isGood,pastTeams){
    this.name = name
    this.team =team
    this.height =height
    this.position =position
    this.number =number
    this.netWorth =netWorth
    this.isGood =isGood
    this.pastTeams =pastTeams

}

var shaq = new BasketballPlayer("Shaquille","Suns","7'1\"","Center",36, 100000000,true,["Magic","Lakers","heat","Suns",]);

console.log(shaq.pastTeams.toString());

var bron = new BasketballPlayer("Lebron James","Cavs","6'8","Small Forward",23,100000000, true, ["Heat"]);

bron.pastTeams.push(bron.team);
bron.team = ["Warriors"];

console.log(bron);