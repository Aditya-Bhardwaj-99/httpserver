//JSON used to store data - objects as a string
//array are objects.
const fs=require('fs');

var arr=[
    10,20,30,40
]

arr.push(50)

fs.writeFile('./example.txt', JSON.stringify(arr),(err)=>{
    if(err){console.log(err);}
})


console.log('abc')
/**
 * function x(a,b){sjdhaksjdhaksjdhk}
 * var x = (a,b)=>{laksjdklasjdkl}
 */