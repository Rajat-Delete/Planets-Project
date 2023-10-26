const http = require('http');

const port = 3000;

const server = http.createServer((req,res)=>{
    res.writeHead(200 , {
        'Content-Type' : 'application/json'
    });
    res.end(JSON.stringify({
        id : 1,
        name : 'Issac Newton',
    }))
});


server.listen(port , ()=>{
    console.log(`listening on port ${port}`);
});