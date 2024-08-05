function* generatorFunc(){

    yield "hello",
    yield "world"
}


const genobj=generatorFunc();

for (item of genobj){
    console.log(item);
}