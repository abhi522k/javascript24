
function first(){
    console.log("a");
    console.log("b");
    console.log("h");
    console.log("i");
}

//first()

function addtwono(num1, num2){
    //console.log(num1 + num2);
    let result = num1 + num2;
    return result;
}

// console.log(addtwono(10, 20));

function loginusername(username){
    if(username){
        console.log("a username", username);
    }
}

// console.log(loginusername("abhi"));


function calculateprice (val, ...num1){          //'...'rest operator
    return num1
}

// console.log(calculateprice(10,20,30,40));

const user = {
    name: 'abhi',
    age: 20
}

function userfunction (anyobject){
    console.log(`Hi ${anyobject.name} and your age is ${anyobject.age}`);
}

// userfunction(user);
// userfunction({
//     name: 'abhi',
//     age: 24
// })


const valuearray = [10,20,30,40]

function userfunction (anyarray){
    console.log(`array ${anyarray[1]}`);
}

// userfunction(valuearray);
// userfunction([1,2,3]);