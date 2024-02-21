// scope
c = 1000
if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(c);

function one() {
    let first = 'abhishek'

    function two() {
        let second = 'abhi'
        console.log(first);
    }

    // console.log(second);
    two()
}

//one()


// one()
function one() {
    console.log("one");
}

//two()
const two = function() {
    console.log("two");
}
// two()

//////////////////     //////////////////////////////