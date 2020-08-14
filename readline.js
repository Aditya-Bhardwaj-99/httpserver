const read=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
//stream :- constant flow of data -> buffers  REPL , Event loops


read.on('line',(data)=>{
    var x=data.split(' ');//['10','20','30','40']
    var y=[]
    x.map((data,index)=>{
        console.log(index);
        y.push(parseInt(data))})
    console.log(x);
    console.log(y);
})
//REPL :- Read, Eval, Print loop
//Event loop :- loop that will listen to an event trigger -> REPL -> Event loop
//callbacks

// listen for event -> callback function -> read data, evaluate data, print data -> listening for event

// read.question('Enter some number:- ',(data)=>{
//     console.log(data);
//     read.close();
// })

//ES5 and ES6
//FS module:- readfile,writefile,appendfile,createReadStream,createWriteStream
//readline:- on('line',),question(),close()