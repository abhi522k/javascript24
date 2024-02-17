let str = "33abc"

// console.log(typeof str);
// console.log(typeof (str));

let stringintonumber = Number(str)

// console.log(typeof stringintonumber);
// console.log(stringintonumber);

// string >>> number || Abhishek >> NaN
// string >>> number || 33 >> 33
// string >>> number || 33abc >> NaN

let bool = ""

console.log(typeof bool);

let booltoint = Boolean(bool)

console.log(typeof booltoint);
console.log(booltoint);

// bool >> int || true >> 1
// int >> bool || 1 >> true
// string >> bool || "abc" >> true
// string >> bool || "" >> false
