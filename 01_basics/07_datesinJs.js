// Dates 

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// let myCreatedDate = new Date(2024, 6, 2);
// let myCreatedDate = new Date(2024, 6, 2, 5 , 3);
// let myCreatedDate = new Date("2024-01-14");
let myCreatedDate = new Date("01-21-2024");
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getTime());
// console.log(newDate.getMinutes());
// console.log(newDate.getMonth());

newDate.toLocaleString('default', {
    weekday: "long",
})