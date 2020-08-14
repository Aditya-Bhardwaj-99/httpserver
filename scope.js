function a(){
    console.log(this.name);
}

var x={
    name:'Aditya',
    callme : a
}

var y={
    name:'Shagun',
    callme: a
}

var z = {
    name:'Ratanshree',
    callme : a
}

x.callme();
y.callme();
z.callme();