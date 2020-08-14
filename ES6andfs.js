const fs=require('fs');

fs.readFile('./add.js',(err,data)=>{
    if(err){console.log(err);}
    console.log(data.toString());
})


fs.readFileSync('./add.js');
fs.writeFileSync('./add.js')
;
var x='ajkshjkashdakshdjkafhoiaenksc'

// fs.writeFile('./example.txt',x,(err)=>{
//     if(err){console.log(err);}
// })

fs.appendFile('./example.txt',"some data",(err)=>{
    if(err){console.log(err);}
})

//ES5
function add(a,b){
    //code
}

//ES6
add=(a,b)=>{
    //code
}