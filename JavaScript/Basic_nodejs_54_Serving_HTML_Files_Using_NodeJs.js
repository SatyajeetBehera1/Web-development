const http = require('http')
const fs = require('fs')

const fileContent = readFileSync('Basic_html_9_Entities.html')
const server = createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'})
    res.end(fileContent)
})

server.listen(80,'127.0.0.1',()=>{
    console.log('Listening on port 80')
})

console.log("127.0.0.1:80")
