const name = "abhi"
const age = 24

//console.log(name + age + "value");

console.log(`Hello my name is ${name} and my age is ${age}`); //modern method to write 

const gameName = new String('Skynet-abhi522k')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('k'));

const newstring = gameName.substring(0, 4)
console.log(newstring);

const anotherstring = gameName.slice(1, 4)
console.log(anotherstring);

const newstringone = "   abhi   "
console.log(newstringone.trim());

const url = "www.goo%20gle.com"
console.log(url.replace('%20', ''));
console.log(url.includes('insta'));

console.log(gameName.split('-'));