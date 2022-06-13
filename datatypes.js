// Variables can be defined by 'let', 'const', or 'var' word but using 'var' is generally avoied. 


// Primitive datatypes -----------------------------------------------------------------------------

// string
const x = "Shreyas";
console.log("My name is: " + x)
console.log("Data type is: " + (typeof x));


// number
let num = 34;
console.log(num);
console.log("Data type is: " + (typeof num));

// typecasting
num = String(num)
console.log(num);
console.log("Data type is: " + (typeof num));
// or
num = num.toString
console.log(num);
console.log("Data type is: " + (typeof num));

// boolian
let isCool = true;
console.log(isCool)
console.log("Data type is: " + (typeof isCool));

// null (Null provides a bogus data type in console. Dont worry for now)
let n = null;
console.log(n)
console.log("Data type is: " + (typeof n));

// undefined
let u;
console.log(u)
console.log("Data type is: " + (typeof u));


// Referance Datatypes -----------------------------------------------------------------------------------

// Arrays
let myArr = [24, 36, null, 54, false, "Shreyas"]
console.log(myArr)
console.log("Data type is: " + (typeof myArr));

// Object literals

let dict = {
    1: "notebook",
    2: "pen",
    3: "waterbottle"
}
console.log(dict);
console.log("Data type is: " + (typeof dict));


// function

function findName() {
    
}
console.log("Data type is: " + (typeof findName));