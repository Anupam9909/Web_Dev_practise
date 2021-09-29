let os = require("os");

// os.arch(); -> This function will give the architecture of the computer like x64, x32 etc etc..

console.log(os.arch()); 

let n = 5;
for(let i = 0; i < n ; i++){
    if(os.arch() == "x64"){
        // We can do some work here
        console.log("yes it's a 64 bit laptop");
        console.log("---------------------------------------");
    }
}

// os.platform() -> this command will give the operating system of the computer.(jis bhi computer pe ham ye os.js file run karege uss computer ka platform batayega ye) 

console.log(os.platform());

let m = 5;
for(let i = 0; i < m; i++){
    if(os.platform() == "win32"){
        console.log("yes it's a windows operating system");
        console.log("-------------------------------");
    }
}


// os.networkInterfaces(); -> this command will give the information of the wifi  
console.log(os.networkInterfaces()); 

console.log("----------------------------------");

// os.cpus();  -> (server ka load pata karne ke liye) command ha ye
console.log(os.cpus());  