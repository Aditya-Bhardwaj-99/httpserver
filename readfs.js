const fs=require('fs');//file system;
fs.readFile('./example.txt',(e,d)=>{
    if(e){console.log(e);}
    console.log(d);
    console.log(d.toString());
    var jsondata=JSON.parse(d.toString())
    console.log(jsondata);
})