// Dates

let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let mycreatedDate = new Date(2023, 0, 12)
// console.log(mycreatedDate.toDateString());
// let mycreatedDate = new Date(2023, 0, 12, 3, 3)
// console.log(mycreatedDate.toLocaleString());
// let mycreatedDate = new Date("2024-2-5")
let mycreatedDate = new Date("02-05-2024")  //MM/DD/YYYY
// console.log(mycreatedDate.toLocaleString());\

// let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(mycreatedDate.getTime());

// let myDate1 = new Date()
// console.log(myDate1.getMonth());
// console.log(myDate1.getDate());

myDate.toLocaleString('default', {
    weekday: "long",
})