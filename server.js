import { createServer } from 'http';
import { networkInterfaces } from 'os';
import { readFileSync } from 'fs';

// get ip address
const nets = networkInterfaces();
const net = nets["en0"]?.find((v) => v.family == "IPv4");
const ipAddress = net.address

const port = 3000;

const server = createServer((request, response) => {

  // url取得
  console.log(request.url)
  // メソッド
  console.log(request.method)
  // console.log(request.headers)

  response.writeHead(200, {
    "Content-Type": "text/html"
  });

  if (request.method === 'GET') {
    
    const html = readFileSync('./html/index.html')
  
    response.write(html)
    response.end();
  } else if (request.method === 'POST') {

    let data
    request.on('data', function(chunk) {data += chunk})
      .on('end', function() {
 
        console.log(data);
        response.end(data);
 
    })

    // response.write('POST')
    // response.end()
  }

});

server.listen(port)
console.log('http://' + ipAddress + ":" + port);
console.log('http://localhost:' + port);