var str='xyz'
console.log(num);
var num = 10;
xyz();
function xyz(){
    console.log(str);
}

///////////////////////////////////////////////////////////////////
var str = undefined;
var num = undefined;
function xyz(){
    console.log(str);
}
str='xyz';
console.log(num);
num=10;
xyz();