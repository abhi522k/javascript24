// alert(3+3) this will not work in node js, its only support in browser

/* 
number
bigint
string
boolean
null >>> standalone value 
undefined
symbol  >>> unique values
*/

//Object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

// New starting 17/02/2024 for javascript

let value1 = Symbol('123');
let value2 = Symbol('123');
console.log(value1)
console.log(value1 === value2);

//Non preitive datatype
// Array, Object, functions(object function)

const array_value = ['ironman', 'captamerica', 'hulk', 'thor'];

let obj_value = {
    name: 'abhi',
    age: 24,
}

const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof array_value)
console.log(typeof myfunction)
console.log(typeof obj_value)