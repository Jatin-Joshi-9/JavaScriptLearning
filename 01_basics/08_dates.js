// let myDate= new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let createNewDate = new Date(2025,2,6);
// console.log(createNewDate.toDateString());

// console.log(Date.now()); // it will give the current date in milliseconds
let myDate = new Date();
console.log(myDate.getTime()); // it will give the current date in milliseconds
console.log(myDate.getFullYear());  // it will give the current year                
console.log(myDate.getDay());  // it will give the current day
console.log(myDate.getMinutes());  // it will give the current minutes

myDate.toLocaleDateString("default",{weekday: "long"}); // it will give the current day in string