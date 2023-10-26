const http = require('http');

const port = 3000;

const server = http.createServer((req,res)=>{
    // console.log('req fired is', req);

    //adding condition for two different resurces and throwing 404 for resource not found
    if(req.url === '/friends'){
        res.statusCode = 200;
        res.setHeader('Content-Type' , 'application/JSON')
        res.end(JSON.stringify({
            id : 1,
            name : 'Issac Newton',
    }))
    }else if(req.url === '/messages'){
        res.statusCode = 200;
        res.setHeader('Content-Type' , 'application/html');
        res.write('<!DOCTYPE html>')
        res.write('<html>')
        res.write('<body>')
        res.write('<h1>My First HTML API Response</h1>')
        res.write('<p>My first html object</p>')
        res.write('</body>')
        res.write('</html>')
        res.end();
    }else{
        res.statusCode=404;
        res.end();
    }
    
});


server.listen(port , ()=>{
    console.log(`listening on port ${port}`);
}); 