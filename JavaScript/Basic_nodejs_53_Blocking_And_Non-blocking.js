// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire

// const fs = require("fs");
// fs.readFile("satya.txt","utf-8",(err,data)=>{
//     console.log(err,data)
// })

const fs = require("fs");
let x = fs.readFile("satya.txt","utf-8",(err,data)=>{
    console.log(data)
})
