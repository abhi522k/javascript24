
const user = {
    name: 'abhi',
    price: 999,

    welcomemessage: function() {
        console.log(`Hi hello ${this.name}, welcome to this site`);
        console.log(this);
    }
}

// user.welcomemessage()

// function chai(){
//     let name = 'abhi'
//     console.log(this.name);  // this will not work
// }

// chai()

const first = () => {
    let name = 'abhi'
    console.log(this.name);  // this will not work
}

//first()

// const add = (num1, num2) => {
//     return num1 + num2
// }

// console.log(add(2,3));

const add = (num1, num2) => num1 + num2  /// implicit return
    
console.log(add(2,3));