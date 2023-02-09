var http = require('http');

var fs = require('fs');

var url = require('url');

var path = require('path');

var contactPath = path.join(__dirname + '/contact.html');


var Server = http.createServer(handleRequest);

function handleRequest(req, res){

    var store = '';
    req.on('data', (chunk) => {
        store = store + chunk;
    });

    req.on('end' , () => {

        // handle request

        if(req.url === '/index' && req.method === 'GET'){
            res.setHeader('conten-Type' , 'text/html', )
            fs.createReadStream('index.html').pipe(res);
        }
        
        if(req.url === '/about' && req.method === 'GET'){
            res.setHeader('conten-Type' , 'text/html', )
            fs.createReadStream('about.html').pipe(res);
        }
    })
    
    


}

server.listen(5678, () => {
    console.log('server listening on port 5678');
})