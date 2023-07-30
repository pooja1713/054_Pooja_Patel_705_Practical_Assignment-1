const http = require('http');
const path = require('path');
const fs = require('fs');
const server=http.createServer((req,res)=>{
    // res.end("Hello This is ajax");


    if (req.url === '/gethello' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello NodeJS!!');
      }
    
      else if (req.url === '/' && req.method === 'GET') {
        const filePath = path.join(__dirname, 'form.html');
        fs.readFile(filePath, (err, content) => {
          if (err) {
            res.writeHead(500);
            res.end('Error loading the file');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
          }
        });
      }
    

      else {
        res.writeHead(404);
        res.end('404 Not Found');
      }
});

server.listen(8000,()=>{
    console.log("server is listening on port 8000");
})

