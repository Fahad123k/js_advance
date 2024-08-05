// let marks={
//     'nishu':50,
//     'ahmad':68,
//     'khan':20,
//     'rahul':56,
// }

// for( let i =0; i<Object.keys(marks).length;i++){
//     console.log(Object.keys(marks)[i]);
//     console.log(marks[Object.keys(marks)[i]]);
// }


// for in loop

// for(const key in marks){
//     console.log(key,marks[key]);
// }


// let nums=[1,2,3,4,5];

// console.log(nums);

// console.log(Math.max(...nums));


function checkPalidrome(str){
   let end= str.length-1;
   for( let i=0; i<end/2;i++){
    // console.log(str[i],"-",str[end-i]);
    if(str[i]!=str[end-i]){
        return false;
    }
   }
   return true

}

// console.log(checkPalidrome('hell isi lleh'));