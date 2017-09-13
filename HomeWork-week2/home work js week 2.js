//1 
function sum (a, b, c) {
    return a + b + c;
}


//2

function colorCar(color) {
  console.log("a " + color + " car")
}

colorCar("red");

//3

let card = {name: 'mahmoud', age: 28};
function newcard (x) {
   console.log(x)
}
newcard(card);


//4

function vehicleType (code, color) {
   if (code === 1 && color === "red") {
       console.log("A red Car");
   }
    else if (code === 2 && color === "blue") {
        console.log("A blue Motobike");
    }
}
vehicleType(2, "blue"); //A red Car
vehicleType(1, "red"); //A blue Motobike

//5

console.log(3==3);

//6

function vehicle(color, code, age) {
    if (color === "blue" && code <= 5 && age <= 5) {
        console.log("a blue used car");
    }
    else if (color === "red" && code >= 6 && age >= 6) {
        console.log("a red new car");
    } else {
        console.log("used as new car");
    }
}

vehicle("blue", 1, 5);   //a blue used car
vehicle("red", 6, 10);  //a red new car
vehicle("green", 3, 0); //used as new car

//7-8

let vehicles = ['car', 'caravan', 'caravan'];
console.log(vehicles[2]);

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

let newObj {};

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






