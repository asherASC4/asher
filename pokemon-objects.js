function pokemonObjects(name,type,hp,def,atk,legend){
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.def = def;
    this.atk = atk;
    this.legend = legend;
}

var Bulbasaur = new pokemonObjects("Bulbasaur","grass",50, 49, 49,true);
//console.log(Bulbasaur);

var Raichu = new pokemonObjects("Raichu","electric",60, 55, 90, false);
//console.log(Raichu);

var Nidoking = new pokemonObjects("Nidoking", "drill",81, 77, 85,true);
//console.log(Nidoking);

var Zubat = new pokemonObjects("Zubat","bat",40, 35, 45,false );
//console.log(Zubat);

var Seel = new pokemonObjects("Seel","sea",65, 55, 45, false);
//console.log(Seel);

var Krabby = new pokemonObjects("Krabby","water",30, 90, 105, false);
//console.log(Krabby);


var pokemonRoster = [Bulbasaur,Raichu,Nidoking, Zubat, Seel, Krabby]



//for (var i=0; i<pokemonRoster.length ; i++ ){
//    console.log(pokemonRoster);
//}


// loop that subtracts 10 hp is below 



for (var i=0; i<pokemonRoster.length ; i++ ){
    pokemonRoster[i].hp = pokemonRoster[i].hp - 10;
    }

console.log(pokemonRoster);