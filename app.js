var http = require('http');
var fs = require('fs')

http.createServer(function(req, res) {

  if(req.url === '/'){
    fs.createReadStream( __dirname + '/index.html').pipe(res);
  }


  if(req.url === '/api'){
    res.writeHead(200, {'Content-Type': 'application/json'});
    var obj = {
      firstname: 'Brian',
      lastname: 'Sweeney'
    }
    res.end(JSON.stringify(obj))
  }


 

}).listen(1337, '127.0.0.1');