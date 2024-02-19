// Array

const myArrays = [1,2,3,4,5]
const myArrays2 = ["ironman", "thor"]

const arrays = new Array(1,2,3,4,7)
// console.log(arrays[1]);

// array methods

// arrays.push(8)
// arrays.push(8)
// arrays.pop()
// console.log(arrays);

// arrays.unshift(9)
// console.log(arrays);
// arrays.shift()
// console.log(arrays);

// console.log(arrays.includes(1))
// console.log(arrays.indexOf(2))

// const newarr = arrays.join()
// console.log(arrays);
// console.log(newarr);
// console.log(typeof newarr);

// slice and splice
// console.log("A ", arrays);
// const arrslsp = arrays.slice(1,2)
// console.log(arrslsp);
// console.log("after slice B ", arrays);

// console.log("A ", arrays);
// const arrslsp1 = arrays.splice(1,2)
// console.log(arrslsp1);
// console.log("after slice B ", arrays);

const marvel = ["ironman", "thor", "vision"]
const DC = ["Batman", "SuperMAN", "AquaMan"]

// marvel.push(DC)
// console.log(marvel);

const allheros = marvel.concat(DC)
// console.log(allheros);

// Spread operator

const allnewheros = [...marvel, ...DC]
// console.log(allnewheros);

const anotherarray = [1,2,3,[4,7],8,[9,[0,1],2],3,4]
const realarray = anotherarray.flat(Infinity)
// console.log(realarray)

// console.log(Array.isArray("abhi"));
// console.log(Array.from("abhi"));
// console.log(Array.from({name: "abhi"}));  //interview imp

let val1 = 100
let val2 = 200
let val3 = 300
console.log(Array.of(val1, val2, val3));