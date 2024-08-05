class Person{
    constructor(fName,lName){
        this.fName=fName,
        this.lName=lName
    }

     getFullName(){
        return this.fName+" "+this.lName;
    }
}


const person1= new Person("Salman","Khan");
// now we are going to inerit superHero class
class SuperHero extends Person{
    constructor(fName,lName){
       
        super(fName,lName)  // call parent constructor using super
    }

    fightingCrime(){
        console.log("fighting crime");
    }
}


const batman = new SuperHero("Rahul","Gandhi")


// console.log(person1.getFullName());
console.log(batman.getFullName());