// Singleton
// Object.create

//symbol
const symb = Symbol("Mykey1") 

// Object literals
const jsuser = {
    name: "abhishek",
    "age": 24,
    email: "abhishek.com",
    id: 1234,
    [symb]: "symbol1"
}

// console.log(jsuser.name);
// console.log(jsuser.age); 
// console.log(jsuser["name"]);
// console.log(jsuser[symb]);   // pointing to symbol
// jsuser.age = 25
// Object.freeze(jsuser)
// jsuser.age = 24        // this will not get change
// console.log(jsuser);

jsuser.greetings = function(){
    console.log("Hello user")
}

// console.log(jsuser.greetings);

jsuser.greetingstwo = function(){
    console.log(`Hello user, ${this.name}`);
}

// console.log(jsuser.greetingstwo());


//////////////////////////////////Part two
// const obj = new Object(){}  ////// singleton object
const tinderuser = {}   ///// non singleton object

tinderuser.id = 123
tinderuser.name = 'abhi'

// console.log(tinderuser);

const regularuser = {
    id: 123,
    fullname: {
        username: {
            name: {
                firstname: 'Abhi',
                lastname: 'surse'
            }
        }
    }
}

// console.log(regularuser.fullname.username.name);
// console.log(regularuser.fullname.username.name.firstname);

const target = {1:'a', 2:'b'}
const source = {4:'c',3:'d'}

//const result = {target, source}
//console.log(result);

// const result = Object.assign({}, target, source)
// console.log(result);

// const result = {...target, ...source}
// console.log(result);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('namme'));

const course = {
    name: 'js',
    price: 999,
    instructor: 'hitesh'
}

// course.instructor

const {instructor: teacher} = course  /// Object destructuring

console.log(teacher);