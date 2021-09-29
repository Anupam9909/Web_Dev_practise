let cp = require("child_process");

// 1st work
console.log("Trying to open the calculator...");
cp.execSync("calc");
console.log("Opened the calculator...");


console.log("-----------------------------");

// 2nd work
console.log("Trying to open the code editor");
cp.execSync("code");
console.log("Opened the vs code editor");


console.log("-----------------------------");
// // 3rd work
console.log("Trying to open the chrome");
cp.execSync("start chrome");
console.log("Opened the chrome");


console.log("-----------------------------");

console.log("Trying to open the pepcoding website in chrome");
cp.execSync("start chrome https:\\www.pepcoding.com");
cp.execSync("start chrome https:\\www.google.com");
cp.execSync("start chrome https:\\www.github.com");
cp.execSync("start chrome http:\\github.com/Anupam9909");


// 4th work
// // WE CAN RUN ANY FILE (CPP, JAVA, JS etc) WITH   cp.execSync() function

let ans = cp.execSync("node abc.js");
// ans me jo bhi output ayega vo -> binary buffer ki form me ayega

// console.log("output" , ans); // so, if we print like this then it would print the ans in binary form (not understandable data); 
console.log(ans + "");   // ans output ko string me concatenate kar lo and print it(now it works)





// NOTE: jo bhi haam cmd pe command pe likh kar kuch khol sakte ha vo sab yaha kar sakte ha node.js ki help se
// so it means hame bass google pe search karna ha ki cmd pe kya kya kar sakte ha -> jo bhi haam vaha kar payege 
// vo haam yaha node.js pe bhi kar payege.