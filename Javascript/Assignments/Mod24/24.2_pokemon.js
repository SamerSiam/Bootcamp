function pokemon(pokemonName,pokemonType, pokemonAttackList){
    this.name=pokemonName;
    this.type=pokemonType;
    this.attackList=pokemonAttackList;
}

let pokemon1= new pokemon ('pikachu','Electric',["thunder shock", "double kick", "quick attack"]);
let pokemon2= new pokemon ('charizard','flying',["thunder shock", "double kick", "quick attack"]);
let pokemon3= new pokemon ('Bulbasur','Electric',["thunder shock", "double kick", "quick attack"]);

pokemon.prototype.callPokemon=function ()
{
    console.log(`I choose you ${this.name}`);
}

pokemon.prototype.attack=function (attNum)
{
    console.log( `${this.name} used ${this.attackList [attNum]}`);
}

pokemon1.callPokemon();
pokemon1.attack(1);
pokemon2.callPokemon();
pokemon2.attack(0);
pokemon3.callPokemon();
pokemon3.attack(2);