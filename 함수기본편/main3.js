//false : 0, -0 , '' , null, undifined
//true : -1 , 'hello' , 'false'
let num;
if (num){ //undifined
    console.log('true!');
}
else {
    console.log('false!');
}


let obj = {
    name : 'hellozo0',
}

obj && console.log(obj.name); //hellozo0