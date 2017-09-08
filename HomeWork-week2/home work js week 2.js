//1 
function arg () {
    let a = 1;
    let b = 2;
    let c = a + b;
    console.log(c);
    
}
arg();

//2
function colorCar() {
    let a = red;
    let b = blue;
    let c = gray;
    
    alert(b);
}

colorCar();

//3

let card = {name: 'mahmoud', age: 28}
console.log(card);

//4

function vehicleType (color, code) {
    if (color == "blue" && code === 2) {
        console.log("a blue used car")
    }
}
vehicleType("blue", 2);

//5

console.log(3==3);

//6

function vehicle(color, code, age) {
    if (color === "blue" && code === 1 && age === 4) {
        console.log("a blue used car");
    }
    else if (color === "red" && code === 3 && age === 1) {
        console.log("a red new car");
    }
    else {
        console.log("used as new");
    }
        
}

vehicle("blue", 1, 4);

//7-8

let vehicles = ['car', 'caravan', 'caravan'];
console.log(vehicles[3]);

//9
function vehicle(color, code, Age) {
    if (color == "blue" && code === 2 && Age === 2) {
        console.log("a blue used car")
    }
    else if (color == "green" && code === 3 && Age === 1) {
        console.log("a green new caravan")
    }
    else if (color == "gray" && code === 2 && Age === 0) {
        console.log("a new motobike")
    }
}
vehicle("green", 3 ,1);


//10

let vehiclesList  = ['cars', 'motorbikes', 'caravans', 'and bikes .'];
let i;
amount = "";
for (i = 1; i < 3; i++) {
    amount += vehiclesList;
}
console.log("Amazing Joes Garage, we service  " + amount);

//11
 
let vehiclesList  = ['cars', 'motorbikes', 'caravans', 'and bikes .'];
vehiclesList.push("scooters");
let i;
amount = "";
for (i = 1; i < 3; i++) {
    amount += vehiclesList;
}
console.log("Amazing Joes Garage, we service  " + amount);
 
//12

function newObj {};

//13

function objects () {
    let obj1 = {
        a: 1, 
        b: 'this is the letter b', 
        c: { foo: 'what is a foo anyway', 
             bar: [1,2,3,4]
        }
    }
    
    let obj2 = {
        a: '1', 
        b: 'this is the letter b', 
        c: { foo: 'what is a foo anyway', 
             bar: [1,2,3,4]
        }
    }
  if (obj1.length == obj2.length) {
      console.log("Obj1 equal to Obj2")
  }
    else if (obj1.length === obj2.length) {
        console.log("Obj1 is strict equality to Obj2 ")
    }
}

objects();

//14

 function foo(func) {
     
    }
    
    function bar() {
        console.log('Hello, I am bar!');
    }
    
    foo(bar());

//15


var x = [1,2,3];
var y = [1,2,3];
var z = y;

console.log(x == y);

console.log(x === y);

console.log(z == y);

console.log(z == x);

//16

var o1 = { foo: 'bar' };
var o2 = { foo: 'bar' };
var o3 = o2;

let x =  o2;
console.log(typeof x);

let y = 03;
console.log(typeof y);

if (x == y) {
    console.log(ture)
}

if (x != y) {
    console.log(false)
}



//17
let bar = 42; 
typeof typeof bar;
console.log(typeof typeof(bar));
//type of bar is string , type of type of bar is string 






