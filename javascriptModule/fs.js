let fs = require("fs");

// CRUD OPERATION:

// //----------------------------------------------------------
// // 1. READ
// let ans = fs.readFileSync("abc.js");

// // console.log(ans); // we know this will not work as -> it give the content in binary buffer format and we human can't understand it 
// console.log(ans + "");  // THIS WORKS PERFECT

// console.log("this content of the abc.js file is: " + ans); 

// // ----------------------------------------------------------



// 2. CREATE
fs.openSync("temp.txt" , "w");






