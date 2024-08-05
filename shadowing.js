// let name="john";

// {
//     var name="abrahim";
//     console.log("name is ",name);
// }


// let a=5

// {
//     var a=9;

//     console.log(a);
// }

function test(){
    var a="hi";
    let b='hello';



    if(true){
        let a="hello";
        var b="hii"; //illegal shadowing b=gives error
        console.log(a);
        console.log(b);

    }

    console.log("a,b",a,b)
}

test()