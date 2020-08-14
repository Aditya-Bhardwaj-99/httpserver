function x(a,b){
    console.log(a+b);
}

x(10,10);
//---------callback----------
// Everything in JS is an object
// Functions are first class member in javascript - functions can be passed as parameters, functions can return a funcion, apply,bind, call

function i(){
    return add;
}
function add(){
    console.log(10+20);
}
i()();

//callback -- are functions that are called after successful execution of some other function

function some(){
    var num1=10;
    var num2=20;
    return xyz(num1,num2);
}
function xyz(a,b){
    //callback function
    console.log(a*b);
}

some();