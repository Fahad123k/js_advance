function Person(fName,lName){
    this.fName=fName,
    this.lName=lName
}


Person.prototype.getFullname=function(){
    return this.fName+" "+this.lName
}

function SuperHero(fName,lName){

    Person.call(this,fName,lName)
    this.isSuperHero=true;
}


SuperHero.prototype= Object.create(Person.prototype);
SuperHero.prototype.constructor=SuperHero;


SuperHero.prototype.fightCrime=function(){
    return "fighting crime";
}



const batman= new SuperHero("Salman",'khan');
// batman.fightCrime()
console.log(batman.fightCrime());