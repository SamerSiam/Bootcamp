const hero = {
    health: 5,
    power: 68,
    getStrength: function(){
    if (this.health <= 5){
    return this.power - 10;
    } else return this.power;
    }
    }
    function whoIsStronger(getStrength){
    const myStrength = 82;
    if (getStrength() < myStrength){
    return "I am stronger";
    } else return "You are stronger";
    }

 /*  create a bound copy of the function to the hero object so 
    we can access the methods and data elements of the hero object
 **/   
 const bound=whoIsStronger.bind(hero);
    console.log(bound(hero.getStrength));


