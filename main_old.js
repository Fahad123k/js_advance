// let a=10;
// function outter(){
//         let b=20;
//         function inner(){
//             let c=30;
//             console.log(a,b,c);
//         }
//         inner()
// }

// outter();

// curring function
function sum(a,b,c){
    return a+b+c;
}
// console.log(sum(2,3,6));


function curry(fn){
    return function (a){
        return function (b){
             return function (c){
                return fn(a,b,c)
             }
        }
    }
}


// console.log(curry(sum)(2)(4)(6));
// it can be re write or split down as 

const a= curry(sum);

const b=a(2);
const c= b(2)
const ans=c(5);
// console.log(ans);


function Person(name){
// this={}
this.name=name;
}

const p1= new Person("Nishu")
const p2= new Person("Raju")

// console.log(p1.name,"-",p2.name);
// console.log(typeof(Person));