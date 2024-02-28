
const arr = [1,2,3,4,7]

for (const num of arr) {
//    console.log(num);
}

const greetings = "Hello world"

for (const greet of greetings) {
   // console.log(`Each character ${greet}`);
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('FR',"France")
// console.log(map);


for (const key of map) {
//    console.log(key);
}

for (const [key,value] of map){
//    console.log(key, ":--", value);
}

const myObject = {                    /// object is not iterable in 'forof' loop
    game1 = "counterstrike"
    game2 = "bgmi"
}

/////////////// we will learn how to iterate objects on for loops 