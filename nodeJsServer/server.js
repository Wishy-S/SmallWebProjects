let http = require('http');
let port = 5000;
let url = require('url');

http.createServer(function(request,response){
    console.log('Server started successfully at '+ port + '!!');
    let route = request.url;
    if(route === '/'){
        response.end('<h1>This is the reponse</h1>');
    }
    if(route === '/user'){
        let users = ['Sachin','Ronaldo','Messi','Dhoni'];
        response.end(JSON.stringify(users));
    }
}).listen(port);