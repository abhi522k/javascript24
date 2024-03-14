
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
    game1: "counterstrike",
    game2: "bgmi"
}

/////////////// we will learn how to iterate objects on for loops 

const myObject1 = {
    js: "java script",
    py: "python",
    cpp: "C++"
}

for (const key in myObject1) {
   // console.log(`${key} and full name ${myObject1[key]}`)
}

const programming = ["js", "python", "cpp", "java"]

for (const key in programming) {
    // console.log(`array printing in for in loop ${programming[key]}`)
}

///////////////////////   For each loop ///////////////////////

const advanceprogram = ["js", "python", "cpp", "java", "AI", "GPT"]

// advanceprogram.forEach( function (val) {
//     console.log(val);
// })

// advanceprogram.forEach( (val) => {
//      console.log(val);
//  })

// function printMe(item){
//     console.log(item);
// }

// advanceprogram.forEach(printMe)

advanceprogram.forEach( (val, index, arr) => {
 //    console.log(val, index, arr);
 })


const complexprogram = [
    {
        file: "python",
        filename: "py"
    },
    {
        file: "java",
        filename: "java"
    },
    {
        file: "c++",
        filename: "cpp"
    }
]

complexprogram.forEach( (val)=> {
 //   console.log(val.filename);
})

const values = advanceprogram.forEach( (val) => {
    return val
})

//console.log(values);


const myNum = [1,2,3,4,7,8,9,10]

// const numvalue = myNum.filter( (val) => {       //  ((val) => val > 4) 
//     return val > 4
// })
// console.log(numvalue);


const numvalue = []

myNum.forEach( (val) => {
    if(val > 4){
        numvalue.push(val)
    }
})
// console.log(numvalue);