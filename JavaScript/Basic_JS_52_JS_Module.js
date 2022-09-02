const fs = require("fs"); 
let text = fs.readFileSync("js.js","utf-8")

text = text.replace("Html","html");
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("satya.txt", text);

