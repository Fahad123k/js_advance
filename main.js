function Person(fName,lName){
    this.fName=fName,
    this.lName=lName
}

const p1= new Person("Nisu","Ahmad")
const p2= new Person("Rohit","Shetthy")


// p1.getFullname=function(){
//     return this.fName+" "+this.lName
// }
Person.prototype.getFullname=function(){
    return this.fName+" "+this.lName
}

// Person.prototype.getFullname=()=>this.fName+" "+this.lName;
console.log(p1.getFullname())
console.log(p2.getFullname())
