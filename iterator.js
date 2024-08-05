let iterable=[9,2,3,4,5,6];

// let iterator= iterable[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// custome iteratble
let myarr=["hello",2,3,4,5,6];
const myIterator={
    currentIndex:0,

    next:function(){
        if(this.currentIndex<myarr.length){
            return {
                value:myarr[this.currentIndex++],
                done:false
            }
        }
        else{
            return {
                value:'undefined',
                done:true
            }
        }
    }
}


console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());