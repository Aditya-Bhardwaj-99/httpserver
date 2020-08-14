var doctor = {
    health:30,
    heal: function(num1, num2){
        ex=10;
        this.health = num1+num2
    }
}
var aditya ={
    health:50
}

console.log(aditya)
doctor.heal.call(aditya,50,60);
console.log(aditya);

console.log(aditya)
doctor.heal.apply(aditya,[50,60]);

console.log(aditya);
var healAditya=doctor.heal.bind(aditya,50,60);
healAditya();
console.log(aditya);
//call,apply,bind helps to borrow functions. Different ways to call a functions;